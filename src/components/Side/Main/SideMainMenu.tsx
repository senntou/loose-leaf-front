import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import {AiOutlineHome, AiOutlineInbox, AiOutlineSearch} from "react-icons/ai";


const SideButton = (props : {children:string, path:string, icon:ReactElement} ) => {

    const navigate = useNavigate();
    const changeMainContent = () => {
        navigate(props.path);  
    }
    return (
        <button className="flex h-10 px-3 ml-3 space-x-1 bg-gray-400 hover:bg-gray-700 rounded-full items-center" onClick={changeMainContent}>
            {props.icon}
            <h3 className="text-base ">{props.children}</h3>
        </button>
    );
}

export const SideMainMenu = () => {

    return (
        <div className="flex flex-col w-full items-center border">

            <div>
                <div className="flex w-[12rem] h-10 mt-3 mb-10 bg-cyan-600"/>
            </div>

            <div className="flex flex-col items-start w-[14rem] space-y-2">
                <SideButton path="/" icon={<AiOutlineHome size="1.5rem"/>}>Home</SideButton>
                <SideButton path="/search" icon={<AiOutlineSearch size="1.5rem"/>}>Search</SideButton>
                <SideButton path="/post" icon={<AiOutlineInbox size="1.5rem"/>}>Post</SideButton>
            </div>
                        
        </div>
    );
}
