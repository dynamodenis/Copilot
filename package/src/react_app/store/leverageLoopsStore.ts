import { create } from "zustand";
import { devtools } from 'zustand/middleware';
import { useVariablesStore } from "./variablesStore";

export interface MasterEmail {
  id: number;
  email_address: string;
  email_type: string;
}

export interface MyPersonEmail {
  id: number;
  my_person_id: number;
  master_email_id: number;
  primary: boolean;
  master_email: MasterEmail;
}

export interface MasterCompany {
  id: number;
  company_name: string;
  logo: string;
}

export interface MasterPerson {
  id: number;
  orbiter_user: boolean;
  name: string;
  avatar: string;
  master_company_id: number;
  current_title: string;
  primary_location_id: number | null;
  bio: string;
  master_company: MasterCompany;
  orbiter_connect_request_sent: boolean;
  orbiter_connect_request_received: boolean;
  orbiter_connection: boolean;
  company_name?: string;
}

export interface LeverageLoopPerson {
  id: number;
  created_at: number;
  master_person_id: number;
  full_name: string;
  status: "completed";
  last_activity_at: number | null;
  my_person_emails: MyPersonEmail[];
  master_person: MasterPerson;
}

export interface SuggestionRequest {
  id?: number;
  created_at?: number;
  updated_at?: number | null;
  user_id?: number;
  copilot_mode?: string;
  request_panel_title: string;
  request_header_title: string;
  request_context: string;
  status: "draft" | "suggestion"  | "processing" | "archived";
  leverage_loop_suggestions?: any[];
  leverage_loop_suggestion_count?: number;
  outcome_suggestions?: any[];
  outcome_plan_steps?: any[];
  outcome_suggestion_count?: number;
  parent_suggestion_context?: string | null;
  master_person_id: number;
  // Person fields (populated from master_person)
  master_person?: MasterPerson;
}

interface LeverageLoopsStore {
  leverageLoops: LeverageLoopPerson[];
  suggestionRequests: SuggestionRequest[];
  // Separate loading states for each operation
  isLoadingPersons: boolean;
  isLoadingSuggestionRequests: boolean;
  isCreatingSuggestionRequest: boolean;
  isDeletingSuggestionRequest: boolean;
  // Separate error states for each operation
  personsError: string | null;
  suggestionRequestsError: string | null;
  createSuggestionRequestError: string | null;
  deleteSuggestionRequestError: string | null;
  fetchNetworkPersons: () => Promise<void>;
  fetchSuggestionRequests: () => Promise<void>;
  setLeverageLoops: (leverageLoops: LeverageLoopPerson[]) => void;
  addLeverageLoops: (leverageLoops: LeverageLoopPerson[]) => void;
  createSuggestionRequest: (suggestionRequest: SuggestionRequest) => Promise<void>;
  deleteSuggestionRequest: (suggestionRequestId: number) => Promise<void>;
}

export const useLeverageLoopsStore = create<LeverageLoopsStore>()(
  devtools(
    (set) => ({
      leverageLoops: [],
      suggestionRequests: [],
      // Separate loading states
      isLoadingPersons: false,
      isLoadingSuggestionRequests: false,
      isCreatingSuggestionRequest: false,
      isDeletingSuggestionRequest: false,
      // Separate error states
      personsError: null,
      suggestionRequestsError: null,
      createSuggestionRequestError: null,
      deleteSuggestionRequestError: null,

      fetchNetworkPersons: async () => {
        set({ isLoadingPersons: true, personsError: null });
        try {
          const { token, baseUrl, dataSource } = useVariablesStore.getState();
          
          if (!baseUrl || (typeof baseUrl === 'string' && baseUrl.trim() === '')) {
            console.error('VariablesStore state:', useVariablesStore.getState());
            throw new Error('Base URL is not defined. Please provide it as a prop to CopilotApp.');
          }
          if (!token || (typeof token === 'string' && token.trim() === '')) {
            console.error('VariablesStore state:', useVariablesStore.getState());
            throw new Error('Token is not defined. Please provide it as a prop to CopilotApp.');
          }
          
          const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'x-data-source': dataSource || ''
          };
          const response = await fetch(`${baseUrl}:Et3oQAtI/my-persons`, { headers });
          
          const data = await response.json();
          
          if (!response.ok) {
            const apiMessage = data?.message || data?.error || 'Failed to fetch loops';
            const errorMessage = `HTTP ${response.status}: ${apiMessage}`;
            throw new Error(errorMessage);
          }

          set({ leverageLoops: data, isLoadingPersons: false });
        } catch (error) {
          set({
            personsError: error instanceof Error ? error.message : 'Unknown error',
            isLoadingPersons: false
          });
        }
      },

      fetchSuggestionRequests: async () => {
        set({ isLoadingSuggestionRequests: true, suggestionRequestsError: null });
        try {
          const { token, baseUrl, dataSource } = useVariablesStore.getState();
          
          if (!baseUrl || (typeof baseUrl === 'string' && baseUrl.trim() === '')) {
            console.error('VariablesStore state:', useVariablesStore.getState());
            throw new Error('Base URL is not defined. Please provide it as a prop to CopilotApp.');
          }
          if (!token || (typeof token === 'string' && token.trim() === '')) {
            console.error('VariablesStore state:', useVariablesStore.getState());
            throw new Error('Token is not defined. Please provide it as a prop to CopilotApp.');
          }
          
          const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'x-data-source': dataSource || ''
          };
          const response = await fetch(`${baseUrl}:MkA4QsNh/suggestion-requests?copilot_mode=loop`, { headers });
          
          const data = await response.json();
          
          if (!response.ok) {
            const apiMessage = data?.message || data?.error || 'Failed to fetch suggestion requests';
            const errorMessage = `HTTP ${response.status}: ${apiMessage}`;
            throw new Error(errorMessage);
          }
          set({ suggestionRequests: data?.items ?? [], isLoadingSuggestionRequests: false });

        } catch (error) {
          set({
            suggestionRequestsError: error instanceof Error ? error.message : 'Unknown error',
            isLoadingSuggestionRequests: false
          });
        }
      },

      createSuggestionRequest: async (suggestionRequest: SuggestionRequest) => {
        set({ isCreatingSuggestionRequest: true, createSuggestionRequestError: null });
        try {
          const { token, baseUrl, dataSource } = useVariablesStore.getState();
          
          if (!baseUrl || (typeof baseUrl === 'string' && baseUrl.trim() === '')) {
            console.error('VariablesStore state:', useVariablesStore.getState());
            throw new Error('Base URL is not defined. Please provide it as a prop to CopilotApp.');
          }
          if (!token || (typeof token === 'string' && token.trim() === '')) {
            console.error('VariablesStore state:', useVariablesStore.getState());
            throw new Error('Token is not defined. Please provide it as a prop to CopilotApp.');
          }
          
          const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'x-data-source': dataSource || ''
          };
            
          const response = await fetch(`${baseUrl}:MkA4QsNh/suggestion-requests`, 
            { headers, method: 'POST', body: JSON.stringify(suggestionRequest) }
          );

          // Parse the response body once
          const data = await response.json();

          if (!response.ok) {
            const apiMessage = data?.message || data?.error || 'Failed to create suggestion request';
            throw new Error(`HTTP ${response.status}: ${apiMessage}`);
          }

          set((state) => ({ 
            suggestionRequests: [data, ...state.suggestionRequests], 
            isCreatingSuggestionRequest: false 
          }));
        } catch (error) {
          set({
            createSuggestionRequestError: error instanceof Error ? error.message : 'Unknown error',
            isCreatingSuggestionRequest: false
          });
        }
      },

      deleteSuggestionRequest: async (suggestionRequestId: number) => {
        set({ isDeletingSuggestionRequest: true, deleteSuggestionRequestError: null });
        try {
          const { token, baseUrl, dataSource } = useVariablesStore.getState();
          
          if (!baseUrl || (typeof baseUrl === 'string' && baseUrl.trim() === '')) {
            throw new Error('Base URL is not defined. Please provide it as a prop to CopilotApp.');
          }
          if (!token || (typeof token === 'string' && token.trim() === '')) {
            throw new Error('Token is not defined. Please provide it as a prop to CopilotApp.');
          }
          
          const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'x-data-source': dataSource || ''
          };
            
          const response = await fetch(`${baseUrl}:MkA4QsNh/suggestion-requests/${suggestionRequestId}`, 
            { headers, method: 'DELETE' }
          );

          if (!response.ok) {
            const data = await response.json().catch(() => ({}));
            const apiMessage = data?.message || data?.error || 'Failed to delete suggestion request';
            throw new Error(`HTTP ${response.status}: ${apiMessage}`);
          }

          set((state) => ({ 
            suggestionRequests: state.suggestionRequests.filter(sr => sr.id !== suggestionRequestId), 
            isDeletingSuggestionRequest: false 
          }));
        } catch (error) {
          set({
            deleteSuggestionRequestError: error instanceof Error ? error.message : 'Unknown error',
            isDeletingSuggestionRequest: false
          });
        }
      },

      setLeverageLoops: (leverageLoops) => set({ leverageLoops }),
      addLeverageLoops: (newLoops) => set((state) => ({ leverageLoops: [...state.leverageLoops, ...newLoops] })),
    }),
    { name: "LeverageLoopsStore" }
  )
);