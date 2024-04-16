import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

export const PageButton = (props : {children:string, path:string, icon:ReactElement} ) => {

    const navigate = useNavigate();
    const changeMainContent = () => {
        navigate(props.path);  
    }
    return (
        <button className="flex h-10 px-3 ml-3 space-x-1 bg-gray-400 hover:bg-gray-700 rounded-full items-center" onClick={changeMainContent}>
            {props.icon}
            <h3 className="text-base hidden md:flex">{props.children}</h3>
        </button>
    );
}