import { SideAuthMenu } from "./SideAuthMenu";
import { UserSessionView } from "../UserSessionView";
import { SideMainMenu } from "./SideMainMenu";

export const SideBar = () => {
    return (
        <div className="flex flex-col h-4/5 w-full items-center border bg-white">
            <SideMainMenu/>
            {/* <SideAuthMenu/> */}
            <UserSessionView/>
        </div>
    );
}