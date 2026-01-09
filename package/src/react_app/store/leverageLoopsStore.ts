import { create } from "zustand";

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

interface LeverageLoopsStore {
  leverageLoops: LeverageLoopPerson[];
  isLoading: boolean;
  error: string | null;
  fetchLeverageLoops: () => Promise<void>;
  setLeverageLoops: (leverageLoops: LeverageLoopPerson[]) => void;
  addLeverageLoops: (leverageLoops: LeverageLoopPerson[]) => void;
}

const baseUrl = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_API_TOKEN;
const dataSource = import.meta.env.VITE_DATA_SOURCE;
if (!baseUrl) {
  console.error('VITE_API_URL is not defined in environment variables');
}
if (!token) {
  console.error('VITE_API_TOKEN is not defined in environment variables');
}

export const useLeverageLoopsStore = create<LeverageLoopsStore>((set) => ({
  leverageLoops: [],
  isLoading: false,
  error: null,
  fetchLeverageLoops: async () => {
    set({ isLoading: true, error: null })
    try {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'x-data-source': dataSource
      };
      const response = await fetch(`${baseUrl}/my-persons`, { headers });
      
      const data = await response.json();
      
      if (!response.ok) {
        // Extract error message from API response
        const apiMessage = data?.message || data?.error || 'Failed to fetch loops';
        const errorMessage = `HTTP ${response.status}: ${apiMessage}`;
        throw new Error(errorMessage);
      }

      set({ leverageLoops: data, isLoading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Unknown error',
        isLoading: false
      });
    }
  },

  setLeverageLoops: (leverageLoops) => set({ leverageLoops }),
  addLeverageLoops: (newLoops) => set((state) => ({ leverageLoops: [...state.leverageLoops, ...newLoops] })),
}));