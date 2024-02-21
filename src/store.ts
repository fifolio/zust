import { create } from "zustand";

type Store = {
    year: number;
    day: number;
    inc: () => void;
    dec: () => void;
    // data: [];
    // fetchData: () => void;
}


const useStore = create<Store>()((set) => ({
    year: 1996,
    day: 24,
    inc: () => set(store => ({ year: store.year + 1 })),
    dec: () => set(store => ({ day: store.day - 1 })),
    // data: [],
    // fetchData: async () => {
    //     const response = await fetch("api-endpoint");
    //     const data = await response.json();
    //     set({data: data})
    // }
}));

export default useStore;