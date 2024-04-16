import { Route, Routes } from "react-router-dom";
import { NoteListPage } from "./NoteList/NoteListPage";
import { NoteViewContainer } from "./NoteViewer/NoteViewContainer";
import { LoginView } from "./Auth/LoginView";
import { NotePostPage } from "./Post/NotePostPage";
import { NoteSearchPage } from "./NoteList/NoteSearchPage";
import { SignupView } from "./Auth/SignupView";

export const MainContent = () => {

    return (
        <div className="flex h-full justify-center items-center w-full md:w-[54rem]">
            <Routes>
                <Route path="/" element={<NoteListPage/>}/>
                <Route path="/note/:noteId" element={<NoteViewContainer/>}/>
                <Route path="/post" element={<NotePostPage/>}/>
                <Route path="/login" element={<LoginView/>}/>
                <Route path="/signup" element={<SignupView/>}/>
                <Route path="/search" element={<NoteSearchPage/>}/>
            </Routes>
        </div>
    );
}