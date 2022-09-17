import create from 'zustand';
import type { NextRouter } from 'next/router';

interface StoreState {
	router: NextRouter | undefined;
	dom: HTMLDivElement | undefined;
	setRouter: (route: NextRouter) => void;
	setDom: (div: HTMLDivElement) => void;
}

const useStore = create<StoreState>()((set) => ({
	router: undefined,
	dom: undefined,
	setRouter: (route) => set(() => ({ router: route })),
	setDom: (div) => set(() => ({ dom: div })),
}));

export default useStore;
