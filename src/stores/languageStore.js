import { atom } from 'nanostores';

// Cargar el idioma inicial desde localStorage
const initialLanguage = typeof window !== 'undefined' 
    ? localStorage.getItem('language') || 'esp' // Por defecto español
    : 'esp';

export const languageStore = atom({ language: initialLanguage });

// Función para cambiar el idioma y guardarlo en localStorage
export const setLanguage = (newLanguage) => {
    languageStore.set({ language: newLanguage });
    if (typeof window !== 'undefined') {
        localStorage.setItem('language', newLanguage);
    }
};
