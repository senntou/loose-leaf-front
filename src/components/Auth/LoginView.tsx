import React, { FormEventHandler, useContext, useState } from "react";
import { UserIdContext } from "../../context/UserIdContext";
import { useNavigate } from "react-router-dom";

type InputType = {
    id:string,
    password:string
}
type MyInputPropsType = {
    values:InputType,
    setValues: React.Dispatch<React.SetStateAction<InputType>>
    content: 'id' | 'password'
}

export const MyInput = (props : MyInputPropsType) => {

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        
        switch(props.content){
            case "id":
                props.setValues( (prev) => ({...prev, id:target.value}));
                break;
            case "password":
                props.setValues( (prev) => ({...prev, password:target.value}));
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


export const LoginView = () => {

    const [values ,setValues] = useState<InputType>({id:"", password:""});
    const context = useContext(UserIdContext);
    const navigate = useNavigate();
    if(context === undefined) return (<div/>);

    const handleSubmit : FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        fetch("/auth/login",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include",
            body: JSON.stringify({id: values.id, password: values.password}),
            redirect:"follow"
        })
        .then( (res) => {
            console.log(res);
            if(res.status === 200){
                context.fetchUserId();
                navigate("/");
            }
        });
    }

    return (
        <div className="flex flex-col justify-start h-[24rem] w-[30rem] items-center bg-gray-100 rounded-3xl">

            <h1 className="my-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900">
                Sign in
            </h1>

            <form onSubmit={handleSubmit}>
                <MyInput values={values} setValues={setValues} content="id" />
                <MyInput values={values} setValues={setValues} content="password" />
                <button 
                    className="my-10 px-10 bg-gray-300 hover:bg-gray-400 rounded-xl" 
                    type="submit"
                >Sign in</button>
            </form>

            <a href="/signup" className=" text-blue-600">アカウントを持っていません</a>

        </div>
    );
}