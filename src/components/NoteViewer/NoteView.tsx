import React from "react";
import { NoteType } from "../../types/MainContentTypes";

const CommentView : React.FC<{children : string | undefined}> = ({children}) => {
    return (
        <div className="flex p-2 items-start h-20 w-full bg-white">
            <p>{ children ? children : "この投稿にはコメントがありません"}</p>
        </div>
    );
}

export const NoteView : React.FC<{file : NoteType | null}> = ({file}) => {
        
    const noteURL = window.location.origin + "/pdf/" + file?.id;

    return (
        <div className="flex flex-col h-full w-full justify-start items-start px-10">
            <CommentView>{file?.comment}</CommentView>
            <a href={noteURL} className="mx-auto text-blue-500" >閲覧</a>
        </div>
    );
}