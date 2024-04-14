import { useEffect, useState } from "react";
import { NoteType } from "../types/MainContentTypes";
import { useParams } from "react-router-dom";
import { NoteView } from "./NoteView";

export const NoteViewContainer = () => {

    const [file, setFile] = useState<NoteType | null>(null);
    const {noteId} = useParams();

    useEffect(() => {
        fetch('http://localhost:3000/api/?fileId=' + noteId)
        .then( (res) => res.json() )
        .then( (json) => {
            if(json.files.length !== 0) setFile(json.files[0]);
        });
    },[]);

    return (
        <div className="flex flex-col justify-center h-full w-full bg-gray-300">
            <p>{file && file.title}</p>
            <NoteView/>
        </div>
    );
}