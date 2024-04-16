import { useContext, useEffect, useState } from "react";
import { UserIdContext } from "../../context/UserIdContext";
import { useNavigate } from "react-router-dom";

export const UserSessionView = () => {

    const context = useContext(UserIdContext);
    const [id, setId] = useState<string>("ログインしていません");
    const navigate = useNavigate();

    useEffect( () => {
        if(context && context.userId) setId(context.userId);
        else setId("ログインしていません");
    }, [context]);

    const handleOnClick = () => {
        if(!context) return ;
        // ログインしている場合
        if(context.userId){
            let res = window.confirm("ログアウトしますか？");
            if(!res) return ;

            fetch("auth/logout", {
                method:"POST",
                credentials:"include",
            }).then(() => {
                context.fetchUserId();
            });
        }
        // ログインしていない場合
        else {
            navigate("/login");
        }
    }

    return (
        <div className="flex md:bottom-0 h-full md:h-14 w-full bg-white">
            <button onClick={handleOnClick} className="m-auto text-blue-700">{id}</button>
        </div>
    );
}