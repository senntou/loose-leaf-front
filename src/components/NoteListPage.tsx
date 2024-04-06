import { useState } from "react";
import { useEffect } from "react";
import {NotePanel} from "./NotePanel";

type File = {
    title: string,
    comment: string,
}

export const NoteListPage = () => {

    const [ files, setFiles] = useState<File[]>([]);
    
    useEffect( () => {
        fetch('http://localhost:3000/api')
        .then( (res) => res.json() )
        .then( (json) => {
            setFiles(json.files);
        });
    },[]);

    return (
        <div className="flex flex-col w-full max-w-full bg-gray-300 border-black border-double border-8 rounded-3xl">

            <div className="flex">
                <h1 className="m-10 text-4xl font-extrabold">一覧</h1>
            </div>

            <ul className="grid w-full p-10">
                { files.map( (file, index) => (
                    <li className="w-full" key={index}>
                        <NotePanel title={file.title} comment={file.comment}/>
                        <br/>
                    </li>
                ))}
            </ul>
        </div>
    );
}