import { useParams } from "react-router-dom";

export const NoteView = () => {
    const {noteId} = useParams();
    const noteURL = "http://localhost:3000/pdf/" + noteId;

    return (
        <div className="flex justify-center">
            <iframe className="w-[50rem] h-screen" title={"note-" + noteId} src={noteURL} />
        </div>
    );
}