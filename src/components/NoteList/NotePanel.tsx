import { NoteType } from "../../types/MainContentTypes";
import { useNavigate } from "react-router-dom";

const Icon = () => {
    return (
        <div className="hidden md:flex h-44 w-44 bg-cyan-400 rounded">
            This is Icon
        </div>
    );
}
const Title = (props : {author:string, children : string}) => {
    return (
        <div className="flex h-10 md:h-12 space-x-5">
            <div className="h-8 w-8 md:h-12 md:w-12 my-auto bg-blue-600 rounded-full"></div>

            <div className="flex flex-col items-start">
                <h1 className="my-auto max-w-[30rem] text-sm md:text-xl whitespace-nowrap overflow-hidden font-extrabold text-ellipsis">
                    {props.children}
                </h1>
                <p className="text-xs md:text-base">{props.author}</p>
            </div>
        </div>
    );
}
const Comment = (props : {children : string}) => {
    return (
        <div className="flex justify-start mt-2">
            <p className="text-xs md:text-base">{props.children}</p>
        </div>
    );
}

export const NotePanel = (props: {file : NoteType}) => {

    const navigate = useNavigate();

    const changeToNoteView = () => {
        navigate("/note/" + props.file.id);
    }

    return (
        <button 
            className="flex h-32 md:h-48 max-w-full w-full p-2 bg-white hover:bg-gray-50 rounded-2xl shadow-2xl" 
            onClick={changeToNoteView}
        >
            {/* <Icon/> */}
            <div className="flex flex-col max-w-full mx-5">
                <Title author={props.file.author}>
                    {props.file.title}
                </Title>
                <Comment>
                    {props.file.comment}
                </Comment>
            </div>
        </button>
    );
}