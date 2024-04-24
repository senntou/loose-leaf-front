import { useEffect, useState } from "react";
import { NoteType } from "../../types/MainContentTypes";
import { NotePanel } from "./NotePanel";


export const NoteList = (props : {searchTitle: string}) => {

    const [ files, setFiles] = useState<NoteType[]>([]);

    useEffect( () => {
        fetch('api/?fileName=' + props.searchTitle)
        .then( (res) => res.json() )
        .then( (json) => {
            setFiles(json.files);
        });
    },[]);

    return (
        <ul className="grid max-w-full w-full p-2 md:p-10">
                { files.map( (file, index) => (
                    <li className="w-full" key={index}>
                        <NotePanel file={file}/>
                        <br/>
                    </li>
                ))}
        </ul>
    );
}