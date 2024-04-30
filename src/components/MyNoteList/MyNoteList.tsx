import React, { useContext, useEffect, useState } from "react";
import { NoteType } from "../../types/MainContentTypes";
import { NotePanel } from "../NoteList/NotePanel";
import { UserIdContext } from "../../context/UserIdContext";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import sweetAlert from "sweetalert";
import { useNavigate } from "react-router-dom";

const Buttons : React.FC<{file : NoteType}> = (props) => {

    const navigate = useNavigate();

    const deleteFile = () => {

        sweetAlert({
            title:"確認",
            text: props.file.title + "を削除しますか？",
            icon: "warning",
        }).then( (result) => {
            if(!result) return ;
            if(result){
                fetch("/api/?fileId=" + props.file.id, {
                    method: "DELETE",
                    credentials: "include"
                }).then((res) => {
                    // console.log(res);
                    if(res.status === 200) {
                        sweetAlert({
                            text: "削除に成功しました",
                            icon: "sucsess"
                        })
                    }
                    else {
                        sweetAlert({
                            text: "削除に失敗しました",
                            icon: "error"
                        })
                    }
                });
            }
        });
    }
    const navigateToEdit = () => {
        navigate("/edit/" + props.file.id);
    }

    return (
        <div className="flex flex-col h-32 md:h-48 mr-4 justify-around w-10">
            <button 
                className="h-8 md:h-10 w-8 md:w-10 rounded-full bg-blue-500 hover:bg-blue-700"
                onClick={navigateToEdit}
            >
                {<AiOutlineEdit size="1.5rem" className="mx-auto my-auto"/>}
            </button>

            <button 
                className="h-8 md:h-10 w-8 md:w-10 rounded-full bg-red-500 hover:bg-red-700"
                onClick={deleteFile}
            >
                {<AiOutlineDelete size="1.5rem" className="mx-auto my-auto"/>}
            </button>
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
        });
    },[context]);

    return (
        <ul className="grid max-w-full w-full space-y-6 p-2 md:p-10">
            { files.map( (file, index) => (
                <li className="flex w-full" key={index}>
                    <Buttons file={file}/>
                    <NotePanel file={file}/>
                    <br/>
                </li>
            ))}
        </ul>
    );
}