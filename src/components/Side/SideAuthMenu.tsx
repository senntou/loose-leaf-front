import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserIdContext } from "../../context/UserIdContext";

const classNames = "flex justify-center h-10 w-[7rem] items-center bg-gray-50 border rounded-3xl hover:bg-gray-200"

const LoginButton = () => {
    
    const navigate = useNavigate();

    const navigateToLoginPage = () => {
        navigate("/login");
    }

    return (
        <button className={classNames} onClick={navigateToLoginPage}>
            <p> Login </p>
        </button>
    );
}
const LogoutButton = () => {

    const context = useContext(UserIdContext);
    if(context === undefined) return (<div/>);

    const logout = () => {
        fetch("http://localhost:3000/auth/logout", {
            method:"POST",
            credentials:"include",
        }).then(() => {
            context.fetchUserId();
        });
    }

    return (
        <button className={classNames} onClick={logout}>
            <p> Logout </p>
        </button>
    );
}

export const SideAuthMenu = () => {

    const context = useContext(UserIdContext);
    if(context === undefined) return (<div/>);

    return (
        <div className="flex flex-col justify-end h-full w-full items-center border">
            { context.userId === null ? <LoginButton/> : <LogoutButton/>}
        </div>
    );
}