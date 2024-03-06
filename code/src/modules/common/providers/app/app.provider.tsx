import { PropsWithChildren } from 'react'
import { QueryProvider } from '../query'
import { ApiContextProvider } from '../api-context'

export const AppProvider = ({ children }: PropsWithChildren) => (
    <ApiContextProvider>
        <QueryProvider>{children}</QueryProvider>
    </ApiContextProvider>
)
