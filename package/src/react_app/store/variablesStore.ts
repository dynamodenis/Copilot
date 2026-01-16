import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface VariablesStore {
  token: string | null;
  baseUrl: string | null;
  dataSource: string | null; 
  user_id: number;
  copilot_llm_endpoint: string;
  user_name: string;
  setVariables: (variables: { token?: string; baseUrl?: string; dataSource?: string; user_id: number; copilot_llm_endpoint: string ,user_name: string}) => void;
}

export const useVariablesStore = create<VariablesStore>()(
  devtools(
    (set) => ({
      token: null,
      baseUrl: null,
      dataSource: null,
      user_id: 0,
      copilot_llm_endpoint: "",
      user_name: "",
      setVariables: (variables) =>
        set((state) => ({
          token: variables.token !== undefined ? variables.token : state.token,
          baseUrl: variables.baseUrl !== undefined ? variables.baseUrl : state.baseUrl,
          dataSource: variables.dataSource !== undefined ? variables.dataSource : state.dataSource,
          user_id: variables.user_id !== undefined ? variables.user_id : state.user_id,
          copilot_llm_endpoint: variables.copilot_llm_endpoint !== undefined ? variables.copilot_llm_endpoint : state.copilot_llm_endpoint,
          user_name: variables.user_name !== undefined ? variables.user_name : state.user_name,
        })),
    }),
    { name: "VariablesStore" }
  )
);

