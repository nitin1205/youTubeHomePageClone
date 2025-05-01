import { createContext, ReactNode } from "react"

type SidebarProviderProps = {
 children: ReactNode
}

const sidebarContext = createContext(null);

export function SidebarProvider({ children }: SidebarProviderProps) {

}