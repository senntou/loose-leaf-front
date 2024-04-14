import { useContext, useEffect, useState } from "react";
import { UserIdContext } from "../../context/UserIdContext";

export const UserSessionView = () => {

    const context = useContext(UserIdContext);
    const [id, setId] = useState<string>("ログインしていません");
    useEffect( () => {
        if(context !== undefined && context.userId !== null) setId(context.userId);
        else setId("ログインしていません");
    }, [context]);

    return (
        <div className="flex bottom-0 h-10 w-full border">
            <p className="m-auto">{id}</p>
        </div>
    );
}