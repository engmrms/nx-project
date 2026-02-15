import { StateCreator } from 'zustand'
import { DevtoolsOptions, devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const defaultDevtoolOpts: DevtoolsOptions = {
    name: 'Store',
    // enabled: JSON.parse(import.meta.env.VITE_ENABLE_STOREDEVTOOLS)
}

const DevtoolsMiddlewares = <T>(
    f: StateCreator<T, [['zustand/devtools', never], ['zustand/immer', never]]>,
    devtoolsOptions: DevtoolsOptions = defaultDevtoolOpts,
) => devtools(immer(f), { ...defaultDevtoolOpts, ...devtoolsOptions })

export default DevtoolsMiddlewares
