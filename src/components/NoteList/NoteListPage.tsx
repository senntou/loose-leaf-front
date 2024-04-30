import { NoteList } from "./NoteList";

export const NoteListPage = () => {

    return (
        <div className="flex flex-col h-full w-full max-w-full bg-gray-50 border-2 rounded-3xl overflow-auto">

            <div className="flex top-0 sticky">
                <h1 className="m-10 text-2xl md:text-4xl font-extrabold">一覧</h1>
            </div>

            <NoteList searchTitle=""/>
        </div>
    );
}