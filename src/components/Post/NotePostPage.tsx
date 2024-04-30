import React, { FormEventHandler, useState } from "react";
import axios, { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import sweetalert from 'sweetalert';
import { MyCommentInput, MyTitleInput } from "../Form/InputForms";

export const NotePostPage = () => {

    const [title, setTitle] = useState<string>("");
    const [comment, setComment] = useState<string>("");

    const fileRef = React.createRef<HTMLInputElement>();
    const navigate = useNavigate();

    const handleSubmit : FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        
        const submitData = new FormData();

        // ファイルが選択されていない場合の処理
        if(!fileRef.current || !fileRef.current.files) {
            return ;
        }

        submitData.append("title", title);
        submitData.append("comment", comment);
        submitData.append("file", fileRef.current.files[0]);

        try{
            const res = await axios.post(`/api`, submitData,{
                withCredentials: true,
                headers: {
                    'content-type': 'multipart/form-data',
                },
            });
            if(res.status === 200) {
                sweetalert({
                    text: "POSTに成功しました",
                    icon: "success"
                }).then( () => {
                    navigate("/");
                });
            }
        } catch (e) {
            if(isAxiosError(e)){
                if(e.response && e.response.status === 400 && e.response.data.error) console.log(e.response.data.error);
            }
        }

        
    }

    return (
        <div className="flex flex-col items-start h-[24rem] w-[30rem] bg-gray-100 rounded-3xl">
            <h1 className="my-4 mx-10 text-5xl font-extrabold leading-none tracking-tight text-gray-900">
                POST
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col mx-auto m-2 h-[16rem] w-[20rem]">

                <input type="file" name="file" ref={fileRef}/>

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