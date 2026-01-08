import { create } from "zustand";

interface LeverageLoopsStore {
  leverageLoops: any[];
  isLoading: boolean;
  error: string | null;
  fetchLeverageLoops: () => Promise<void>;
  setLeverageLoops: (leverageLoops: any[]) => void;
  addLeverageLoops: (leverageLoops: any[]) => void;
}

export const useLeverageLoopsStore = create<LeverageLoopsStore>((set) => ({
  leverageLoops: [], 
  isLoading: false,
  error: null,
  fetchLeverageLoops: async () =>{
    set({isLoading: true, error: null})
    try {
        const response = await fetch('/api/leverage-loops');
        
        if (!response.ok) {
          throw new Error('Failed to fetch loops');
        }
        
        const data = await response.json();
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