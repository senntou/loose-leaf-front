import React, { FormEventHandler, useState } from "react";
import axios, { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";

type InputType = {
    title: string,
    comment: string
}
type MyInputPropsType = {
    values:InputType,
    setValues: React.Dispatch<React.SetStateAction<InputType>>,
    content: 'title' | 'comment'
}

export const MyInput = (props : MyInputPropsType) => {

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        
        switch(props.content){
            case "title":
                props.setValues( (prev) => ({...prev, title:target.value}));
                break;
            case "comment":
                props.setValues( (prev) => ({...prev, comment:target.value}));
                break;
        }
    }

    return (
        <div className="flex flex-col items-start my-1">
            <label className="font-semibold text-xl">{props.content}</label>
            <input 
                className="w-[18rem]"
                type="text" 
                value={props.values[props.content]}
                onChange={handleInputChange}
            ></input>
        </div>
    );
}


export const NotePostPage = () => {

    const [values, setValues] = useState<InputType>({title:"", comment:""});
    const fileRef = React.createRef<HTMLInputElement>();
    const navigate = useNavigate();

    const handleSubmit : FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        
        const submitData = new FormData();

        // ファイルが選択されていない場合の処理
        if(!fileRef.current || !fileRef.current.files) {
            return ;
        }

        submitData.append("title", values.title);
        submitData.append("comment", values.comment);
        submitData.append("file", fileRef.current.files[0]);

        try{
            const res = await axios.post(`api`, submitData,{
                withCredentials: true,
                headers: {
                    'content-type': 'multipart/form-data',
                },
            });
            if(res.status === 200) {
                navigate("/");
                alert("POSTに成功しました");
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

                <MyInput values={values} setValues={setValues} content="title"/>
                <MyInput values={values} setValues={setValues} content="comment"/>

                <button 
                    className="my-10 px-10 bg-gray-300 hover:bg-gray-400 rounded-xl" 
                    type="submit"
                >POST</button>
            </form>
        </div>
    );
}