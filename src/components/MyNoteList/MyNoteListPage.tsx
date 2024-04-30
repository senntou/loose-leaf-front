import { MyNoteList } from "./MyNoteList";

export const MyNoteListPage = () => {

    return (
        <div className="flex flex-col h-full w-full max-w-full bg-gray-50 border-2 rounded-3xl overflow-auto">

            <div className="flex top-0 sticky">
                <h1 className="m-10 text-2xl md:text-4xl font-extrabold">マイノート</h1>
            </div>

            <MyNoteList/>
        </div>
    );
}