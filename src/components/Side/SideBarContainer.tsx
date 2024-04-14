import { SideBar } from "./Main/SideBar";
import { UserSessionView } from "./UserSessionView";

export const SideBarContainer = () => {
    return (
        <div className="h-screen w-[18rem] pl-10">
            <SideBar/>
            <UserSessionView/>
        </div>
    );
}