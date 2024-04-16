import { useState } from "react";
import { useEffect } from "react";
import {NotePanel} from "./NotePanel";
import { NoteType } from "../../types/MainContentTypes";

export const NoteListPage = () => {

    const [ files, setFiles] = useState<NoteType[]>([]);
    
    useEffect( () => {
        fetch('http://localhost:3000/api')
        .then( (res) => res.json() )
        .then( (json) => {
            setFiles(json.files);
        });
    },[]);

    return (
        <div className="flex flex-col w-full max-w-full bg-gray-50 border-2 rounded-3xl">

            <div className="flex">
                <h1 className="m-10 text-2xl md:text-4xl font-extrabold">一覧</h1>
            </div>

            <ul className="grid max-w-full w-full p-2 md:p-10">
                { files.map( (file, index) => (
                    <li className="w-full" key={index}>
                        <NotePanel file={file}/>
                        <br/>
                    </li>
                ))}
            </ul>
        </div>
    );
}