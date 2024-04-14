import { Route, Routes } from "react-router-dom";
import { NoteListPage } from "./NoteList/NoteListPage";
import { NoteViewContainer } from "./NoteViewer/NoteViewContainer";
import { LoginView } from "./Auth/LoginView";

export const MainContent = () => {

    return (
        <div className="w-[54rem] min-w-[54rem]">
            <Routes>
                <Route path="/" element={<NoteListPage/>}/>
                <Route path="/note/:noteId" element={<NoteViewContainer/>}/>
                <Route path="/login" element={<LoginView/>}/>
            </Routes>
        </div>
    );
}