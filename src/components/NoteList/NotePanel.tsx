import { NoteType } from "../../types/MainContentTypes";
import { useNavigate } from "react-router-dom";

const Icon = () => {
    return (
        <div className="h-44 w-44 bg-cyan-400 rounded">
            This is Icon
        </div>
    );
}
const Title = (props : {author:string, children : string}) => {
    return (
        <div className="flex h-12 space-x-5">
            <div className="h-12 w-12 my-auto bg-blue-600 rounded-full"></div>

            <div className="flex flex-col items-start">
                <h1 className="my-auto max-w-[30rem] text-xl whitespace-nowrap overflow-hidden font-extrabold text-ellipsis">
                    {props.children}
                </h1>
                <p>{props.author}</p>
            </div>
        </div>
    );
}
const Comment = (props : {children : string}) => {
    return (
        <div className="flex justify-start ">
            <p>{props.children}</p>
        </div>
    );
}

export const NotePanel = (props: {file : NoteType}) => {

    const navigate = useNavigate();

    const changeToNoteView = () => {
        navigate("/note/" + props.file.id);
    }

    return (
        <button className="flex h-48 w-full p-2 bg-white hover:bg-gray-50 rounded-2xl shadow-2xl" onClick={changeToNoteView}>
            <Icon/>
            <div className="flex flex-col mx-5">
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