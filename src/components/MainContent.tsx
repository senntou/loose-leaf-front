import { Route, Routes } from "react-router-dom";
import { NoteListPage } from "./NoteList/NoteListPage";
import { NoteViewContainer } from "./NoteViewer/NoteViewContainer";
import { LoginView } from "./Auth/LoginView";
import { NotePostPage } from "./Post/NotePostPage";
import { NoteSearchPage } from "./NoteList/NoteSearchPage";
import { SignupView } from "./Auth/SignupView";
import { MyNoteListPage } from "./MyNoteList/MyNoteListPage";
import { NoteEditPage } from "./Post/NoteEditPage";

export const MainContent = () => {

    return (
        <div className="flex h-full justify-center items-center w-full min-w-full md:min-w-[54rem] md:w-[54rem]">
            <Routes>
                <Route path="/" element={<NoteListPage/>}/>
                <Route path="/note/:noteId" element={<NoteViewContainer/>}/>
                <Route path="/post" element={<NotePostPage/>}/>
                <Route path="/edit/:noteId" element={<NoteEditPage/>}/>
                <Route path="/my" element={<MyNoteListPage/>}/>
                <Route path="/login" element={<LoginView/>}/>
                <Route path="/signup" element={<SignupView/>}/>
                <Route path="/signup/:errorMessage" element={<SignupView/>}/>
                <Route path="/search" element={<NoteSearchPage/>}/>
            </Routes>
        </div>
    );
}