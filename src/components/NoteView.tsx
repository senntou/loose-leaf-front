import { useEffect, useState } from "react";
import { NoteType } from "./types/MainContentTypes";
import { useParams } from "react-router-dom";

export const NoteView = () => {

    const [file, setFile] = useState<NoteType | null>(null);
    const {noteId} = useParams();

    useEffect(() => {
        console.log('note id is below')
        console.log(noteId);
        fetch('http://localhost:3000/api/?fileId=' + noteId)
        .then( (res) => res.json() )
        .then( (json) => {
            if(json.files.length !== 0) setFile(json.files[0]);
        });
    },[]);

    return (
        <div className="h-full w-full bg-gray-300">
            <h1>hello worlds</h1>
            <p>{file && file.id}</p>
        </div>
    );
}