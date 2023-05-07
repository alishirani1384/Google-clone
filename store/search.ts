import { create } from "zustand";

interface SearchState {
  search: string;
  setSearch: (value:string) => void;
}
interface PaginationState {
  page: number;
  nextPage: (value:number) => void;
  prevPage: (value:number) => void;
}

export const useSearch = create<SearchState>()((set) => ({
  search: "",
  setSearch: (value) => set(() => ({ search: value })),
}));

export const usePagination = create<PaginationState>()((set) => ({
  page: 0,
  nextPage: (value) => set(() => ({ page: value })),
  prevPage: (value) => set(() => ({ page: value })),
}))
