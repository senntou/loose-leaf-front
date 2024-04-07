import { useContext } from "react";
import { NoteType } from "../types/MainContentTypes";
import { MainContentSelectorContext } from "../../context/MainContentSelectorContext";
import { NoteViewContext } from "../../context/NoteViewContext";

const Icon = () => {
    return (
        <div className="h-44 w-44 bg-cyan-400 rounded">
            This is Icon
        </div>
    );
}
const Title = (props : {children : string}) => {
    return (
        <div className="flex h-12 space-x-5">
            <div className="h-10 w-10 my-auto bg-blue-600 rounded-full"></div>
            <h1 className="my-auto max-w-[30rem] text-2xl whitespace-nowrap overflow-hidden font-extrabold text-ellipsis">
                {props.children}
            </h1>
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

    const mainContentSelectorContext = useContext(MainContentSelectorContext);
    const noteViewContext = useContext(NoteViewContext);

    const changeToNoteView = () => {
        if(mainContentSelectorContext === undefined || noteViewContext === undefined) return ;

        const {setMainContentSelector} = mainContentSelectorContext;
        const {setNoteView} = noteViewContext

        setMainContentSelector('NoteViews');
        setNoteView(props.file.id)
    }

    return (
        <div className="flex h-48 w-full p-2 bg-white hover:bg-gray-50 rounded-2xl shadow-2xl" onClick={changeToNoteView}>
            <Icon/>
            <div className="flex flex-col mx-5">
                <Title>
                    {props.file.title}
                </Title>
                <Comment>
                    {props.file.comment}
                </Comment>
            </div>
        </div>
    );
}