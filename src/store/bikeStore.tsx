import { Product } from '@/types/types';
import { create } from 'zustand';
interface BikeStore {
  filteredBikes: Product[]
  setFilteredBikes: (filteredBikes: Product[]) => void
}

export const useBikeStore = create<BikeStore>((set) => ({
  filteredBikes: [],
  setFilteredBikes: (filteredBikes) => set({ filteredBikes })
}))


