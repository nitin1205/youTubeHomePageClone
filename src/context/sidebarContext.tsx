import { createContext, ReactNode, useContext, useEffect, useState } from "react"

type SidebarProviderProps = {
 children: ReactNode
}

type sidebarContextType = {
    isLargeOpen: boolean;
    isSmallOpen: boolean;
    toggle: () => void;
    close: () => void;
}

const sidebarContext = createContext<sidebarContextType | null>(null);

export function useSidebarContext() {
    const value =useContext(sidebarContext);

    if(value == null) throw new Error('Cannot use outside of SidebarProvider');

    return value; 
}


export function SidebarProvider({ children }: SidebarProviderProps) {
        const [isLargeOpen, setIsLargeOpen] = useState(true);
        const [isSmallOpen, setIsSmallOpen] = useState(false);


        useEffect(() => {
            const handler = () => {
                if(!isSmallScreen()) setIsSmallOpen(false)
            }

            window.addEventListener('resize', handler)

            return () => {
                window.removeEventListener('resize', handler);
            }
        },[])

        function isSmallScreen() {
            return window.innerWidth < 1024;
        }

        function toggle() {
            if(isSmallScreen()) {
                setIsSmallOpen(s => !s);
            } else {
                setIsLargeOpen(l => !l)
            }
        }

        function close() {
            if(isSmallScreen()){
                setIsSmallOpen(false)
            } else {
                setIsLargeOpen(false)
            }
        }

        return(
            <sidebarContext.Provider value={{
                isLargeOpen,
                isSmallOpen,
                toggle,
                close
            }}>
                {children}
            </sidebarContext.Provider>
        )}