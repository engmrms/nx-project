import { create } from 'zustand'
import { THEME } from '../models/enums'
import DevtoolsMiddlewares from './middleware'

interface ThemeStore {
    theme: THEME | string
    setTheme: (newTheme: THEME) => void
}

const useThemeStore = create<ThemeStore>()(
    DevtoolsMiddlewares(
        set => ({
            theme: THEME.SYSTEM,
            setTheme: (newTheme: THEME) => {
                return set({ theme: newTheme })
            },
        }),
        { name: 'theme' },
    ),
)

export default useThemeStore
