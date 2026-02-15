import { create } from 'zustand'

interface AutoComplainState {
    emoji: string | null
    text: string
    reqNumber: string | null
    setEmoji: (emoji: string) => void
    setText: (text: string) => void
    setReqNumber: (reqNumber: string | null) => void
    showSuccessMSG: boolean
    setShowSuccessMSG: (value: boolean) => void
    reset: () => void
}

export const useAutoComplain = create<AutoComplainState>(set => ({
    emoji: null,
    text: '',
    reqNumber: null,
    showSuccessMSG: false,
    setEmoji: (emoji) => set({ emoji }),
    setText: (text) => set({ text }),
    setReqNumber: (reqNumber) => set({ reqNumber }),
    setShowSuccessMSG: (showSuccessMSG) => set({ showSuccessMSG }),
    reset: () => set({ emoji: null, text: '', showSuccessMSG: false }),
}))