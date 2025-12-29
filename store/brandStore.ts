import { create } from "zustand";
import { Brand } from "../types/brand";
import brands from "../data/brands.json";

interface BrandState {
  selectedBrand: Brand | null;
  brands: Brand[];
  setSelectedBrand: (brand: Brand) => void;
}

export const useBrandStore = create<BrandState>((set) => ({
  selectedBrand: null,
  brands,
  setSelectedBrand: (brand) => set({ selectedBrand: brand }),
}));
