import { useContext, useEffect, useState } from "react";
import { NoteType } from "../../types/MainContentTypes";
import { NotePanel } from "../NoteList/NotePanel";
import { UserIdContext } from "../../context/UserIdContext";

const Buttons = () => {
    return (
        <div className="flex flex-col h-32 md:h-48 mr-4 justify-around w-10">
            <button className="h-8 md:h-10 w-8 md:w-10 rounded-full bg-red-900"></button>
            <button className="h-8 md:h-10 w-8 md:w-10 rounded-full bg-blue-900"></button>
        </div>
    );
}


export const MyNoteList = () => {

    const [ files, setFiles] = useState<NoteType[]>([]);
    
    const context = useContext(UserIdContext);
    
    useEffect( () => {
        if(context === undefined) return ;
        fetch('api/?author=' + context.userId)
        .then( (res) => res.json() )
        .then( (json) => {
            setFiles(json.files);
            console.log(context.userId);
        });
    },[context]);

    return (
        <ul className="grid max-w-full w-full p-2 md:p-10">
            { files.map( (file, index) => (
                <li className="flex w-full" key={index}>
                    <Buttons/>
                    <NotePanel file={file}/>
                    <br/>
                </li>
            ))}
        </ul>
    );
}