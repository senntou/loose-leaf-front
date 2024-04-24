import { useEffect, useState } from "react";
import { NoteType } from "../../types/MainContentTypes";
import { useParams } from "react-router-dom";
import { NoteView } from "./NoteView";
import { Heading } from "../Text/Heading";

export const NoteViewContainer = () => {

    const [file, setFile] = useState<NoteType | null>(null);
    const {noteId} = useParams();

    useEffect(() => {
        fetch('http://localhost:3000/api/?fileId=' + noteId)
        .then( (res) => res.json() )
        .then( (json) => {
            if(json.files && json.files.length !== 0) setFile(json.files[0]);
        });
    },[]);

    return (
        <div className="flex flex-col justify-start items-start px-10 h-full w-full bg-gray-100">
            <div className="flex">
                <Heading>{file && file.title}</Heading>
                <p className="ml-10 my-auto font-medium">作成者：{file?.author}</p>
            </div>
            <NoteView file={file}/>
        </div>
    );
}