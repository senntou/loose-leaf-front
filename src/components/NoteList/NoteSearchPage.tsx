import { FormEventHandler, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { NoteType } from "../../types/MainContentTypes";
import { NotePanel } from "./NotePanel";


export const NoteSearchPage = () => {

    const [searchTitle, setSearchTitle] = useState<string>("");
    const [files, setFiles] = useState<NoteType[]>([]);

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSearchTitle(e.target.value);
    }

    const handleSubmit : FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        fetch('http://localhost:3000/api/?fileName=' + searchTitle)
        .then( (res) => res.json() )
        .then( (json) => {
            setFiles(json.files);
        });
    }

    return(
        <div className="p-5 h-full w-full border border-black bg-gray-50 rounded-3xl">

            <form 
                className="flex justify-start items-center space-x-2 px-5 h-10 w-full bg-gray-300 rounded-3xl"
                onSubmit={handleSubmit}
            >
                <AiOutlineSearch size="2rem"/>
                <input onChange={handleInputChange} className="h-full w-full bg-transparent focus:outline-none"/>
            </form>
            
            <ul className="grid w-full p-10">
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