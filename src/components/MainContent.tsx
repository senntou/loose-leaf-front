import { useContext } from "react";
import { NoteListPage } from "./NoteList/NoteListPage";
import { NoteView } from "./NoteView";
import { MainContentSelectorContext } from "../context/MainContentSelectorContext";

export const MainContent = () => {

    const mainContentSelectorContext = useContext(MainContentSelectorContext);
    if(mainContentSelectorContext === undefined){
        return (
            <div/>
        )
    }

    const {mainContentSelector} = mainContentSelectorContext;
    switch(mainContentSelector){
        case 'NoteList':
            return (
                <div className="w-[54rem]">
                    <NoteListPage/>
                </div>
            );
        case 'NoteViews':
            return (
                <div className="w-[54rem]">
                    <NoteView/>
                </div>
            );
    }

    return (
        <div className="w-[54rem]">
            <NoteListPage/>
        </div>
    );
}