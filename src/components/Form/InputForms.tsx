type MyInputPropsType = {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export const MyTitleInput : React.FC<MyInputPropsType> = (props) => {

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
    
        props.setValue(target.value);
    }

    return (
        <div className="flex flex-col items-start my-1">
            <label className="font-semibold text-xl">Title</label>
            <input 
                className="w-[18rem]"
                type="text" 
                value={props.value}
                onChange={handleInputChange}
            ></input>
        </div>
    );
}


export const MyCommentInput : React.FC<MyInputPropsType> = (props) => {

    const handleInputChange = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
        const target = e.target;
    
        props.setValue(target.value);
    }

    return (
        <div className="flex flex-col items-start my-1">
            <label className="font-semibold text-xl">Comment</label>
            <textarea 
                className="w-[18rem] h-20"
                value={props.value}
                onChange={handleInputChange}
            ></textarea>
        </div>
    );
}

