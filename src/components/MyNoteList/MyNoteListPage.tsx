import { useContext } from "react";
import { MyNoteList } from "./MyNoteList";
import { UserIdContext } from "../../context/UserIdContext";

export const MyNoteListPage = () => {

    return (
        <div className="flex flex-col w-full max-w-full bg-gray-50 border-2 rounded-3xl">

            <div className="flex">
                <h1 className="m-10 text-2xl md:text-4xl font-extrabold">マイノート</h1>
            </div>

            <MyNoteList/>
        </div>
    );
}