import { useNavigate } from "react-router-dom";


const SideButton = (props : {children:string, path:string} ) => {

    const navigate = useNavigate();
    const changeMainContent = () => {
        navigate(props.path);  
    }
    return (
        <div className="flex h-10 p-3 ml-3 space-x-1 bg-gray-400 hover:bg-gray-700 rounded-full items-center" onClick={changeMainContent}>
            <img className="max-h-7 rounded-full -ml-1" src="/imgs/home.jpg" alt="home" />
            <h3 className="text-base ">{props.children}</h3>
        </div>
    );
}

export const SideBar = () => {

    return (
        <div className="flex flex-col h-4/5 w-full items-center border">

            <div>
                <div className="flex w-[12rem] h-10 mt-3 mb-10 bg-cyan-600"/>
            </div>

            <div className="flex flex-col items-start w-[14rem] space-y-2">
                <SideButton path="/">Home</SideButton>
                <SideButton path="/note">Note</SideButton>
            </div>
                        
        </div>
    );
}
