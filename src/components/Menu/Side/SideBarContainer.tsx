import { SideBar } from "./SideBar";

export const SideBarContainer = () => {
    return (
        <div className="hidden md:flex flex-col h-screen w-[18rem] pl-10">
            <SideBar/>
        </div>
    );
}