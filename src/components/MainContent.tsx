import { Route, Routes } from "react-router-dom";
import { NoteListPage } from "./NoteList/NoteListPage";
import { NoteView } from "./NoteView";

export const MainContent = () => {

    return (
        <div className="w-[54rem]">
            <Routes>
                <Route path="/" element={<NoteListPage/>}/>
                <Route path="/note/:noteId" element={<NoteView/>}/>
            </Routes>
        </div>
    );
}