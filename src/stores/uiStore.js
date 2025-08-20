import { atom } from 'nanostores';

// Estado global de UI (modal abierto, etc.)
export const uiStore = atom({ modalOpen: false });

export const setModalOpen = (open) => {
  uiStore.set({ modalOpen: open });
};
