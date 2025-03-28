import {create} from 'zustand';

const useStore = create((set) => ({
  selectedMenuId: null,
  setSelectedMenuId: (menuId) => set({ selectedMenuId: menuId }),
}));

export default useStore;
