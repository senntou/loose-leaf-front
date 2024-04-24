import { NoteList } from "./NoteList";

export const NoteListPage = () => {

    return (
        <div className="flex flex-col w-full max-w-full bg-gray-50 border-2 rounded-3xl">

            <div className="flex">
                <h1 className="m-10 text-2xl md:text-4xl font-extrabold">一覧</h1>
            </div>

            <NoteList searchTitle=""/>
        </div>
    );
}