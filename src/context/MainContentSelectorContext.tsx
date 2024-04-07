import { createContext, useState, ReactNode, FC } from "react";
import { MainContentSelectorType } from "../components/types/MainContentSelectorType";

type Context = {
    mainContentSelector : MainContentSelectorType,
    setMainContentSelector : Function
}

export const MainContentSelectorContext = createContext<Context | undefined>(undefined);

export const MainContentSelectorProvider : FC<{children : ReactNode}> = ({children}) => {

    const [mainContentSelector , setMainContentSelector] = useState<MainContentSelectorType>('NoteList');

    return (
        <MainContentSelectorContext.Provider value={{mainContentSelector,setMainContentSelector}}>
            {children}
        </MainContentSelectorContext.Provider>
    );
}