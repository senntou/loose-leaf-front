import { FC, ReactNode, createContext, useState } from "react";

type Context = {
    noteView : string | null
    setNoteView : Function
}
export const NoteViewContext = createContext<Context | undefined>(undefined);

export const NoteViewContextProvider : FC<{children : ReactNode}> = ({children}) => {

    const [noteView, setNoteView] = useState<string | null>(null);

    return (
        <NoteViewContext.Provider value = {{noteView, setNoteView}}>
            {children}
        </NoteViewContext.Provider>
    );
}