import {AiOutlineHome, AiOutlineInbox, AiOutlineSearch} from "react-icons/ai";
import { PageButton } from "../PageButton";


export const SideMainMenu = () => {

    return (
        <div className="flex flex-col h-full w-full items-center border">

            <div>
                <div className="flex w-[12rem] h-10 mt-3 mb-10 bg-cyan-600"/>
            </div>

            <div className="flex flex-col items-start w-[14rem] space-y-2">
                <PageButton path="/" icon={<AiOutlineHome size="1.5rem"/>}>Home</PageButton>
                <PageButton path="/search" icon={<AiOutlineSearch size="1.5rem"/>}>Search</PageButton>
                <PageButton path="/post" icon={<AiOutlineInbox size="1.5rem"/>}>Post</PageButton>
            </div>
                        
        </div>
    );
}
