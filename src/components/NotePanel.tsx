import { NotePanelProps } from "./types/MainContentTypes";

const Icon = () => {
    return (
        <div className="h-44 w-44 bg-cyan-400 rounded">
            This is Icon
        </div>
    );
}

type TitleProps = {
    children: string;
}
const Title = (props: TitleProps) => {
    return (
        <div className="flex h-12 space-x-5">
            <div className="h-10 w-10 my-auto bg-blue-600 rounded-full"></div>
            <h1 className="my-auto max-w-[30rem] text-2xl whitespace-nowrap overflow-hidden font-extrabold text-ellipsis">
                {props.children}
            </h1>
        </div>
    );
}

type CommentProps = {
    children : string;
}
const Comment = (props : CommentProps) => {
    return (
        <div className="flex justify-start ">
            <p>{props.children}</p>
        </div>
    );
}


export const NotePanel = (props: NotePanelProps) => {
    return (
        <div className="flex h-48 w-full p-2 bg-white hover:bg-gray-50 rounded-2xl shadow-2xl">
            <Icon/>
            <div className="flex flex-col mx-5">
                <Title>
                    {props.title}
                </Title>
                <Comment>
                    {props.comment}
                </Comment>
            </div>
        </div>
    );
}