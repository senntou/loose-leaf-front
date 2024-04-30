import React, { FormEventHandler, useState } from "react";
import axios, { isAxiosError } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import sweetalert from 'sweetalert';
import { MyCommentInput, MyTitleInput } from "../Form/InputForms";

export const NoteEditPage = () => {

    const [title, setTitle] = useState<string>("");
    const [comment, setComment] = useState<string>("");
    const {noteId} = useParams();

    const navigate = useNavigate();

    const handleSubmit : FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        fetch('http://localhost:3000/api/edit', {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({fileId: noteId, title, comment})
        }).then((res) => {
            if(res.status === 400){
                console.log(res.json());
            }

            else if(res.status === 200){
                sweetalert({
                    text: "編集に成功しました！",
                    icon: "success"
                }).then( () => {
                    navigate("/my");
                })
            }
        })
        
        // const submitData = new FormData();

        // submitData.append("title", title);
        // submitData.append("comment", comment);
        // submitData.append("file", fileRef.current.files[0]);

        // try{
        //     const res = await axios.post(`api`, submitData,{
        //         withCredentials: true,
        //         headers: {
        //             'content-type': 'multipart/form-data',
        //         },
        //     });
        //     if(res.status === 200) {
        //         navigate("/");
        //         sweetalert({
        //             text: "POSTに成功しました",
        //             icon: "success"
        //         });
        //     }
        // } catch (e) {
        //     if(isAxiosError(e)){
        //         if(e.response && e.response.status === 400 && e.response.data.error) console.log(e.response.data.error);
        //     }
        // }

        
    }

    return (
        <div className="flex flex-col items-start h-[24rem] w-[30rem] bg-gray-100 rounded-3xl">
            <h1 className="my-4 mx-10 text-5xl font-extrabold leading-none tracking-tight text-gray-900">
                EDIT
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col mx-auto m-2 h-[16rem] w-[20rem]">

                <MyTitleInput value={title} setValue={setTitle} />
                <MyCommentInput value={comment} setValue={setComment} />

                <button 
                    className="my-10 px-10 bg-gray-300 hover:bg-gray-400 rounded-xl" 
                    type="submit"
                >POST</button>
            </form>
        </div>
    );
}