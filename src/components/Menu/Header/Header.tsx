import { AiOutlineHome, AiOutlineInbox, AiOutlineSearch } from "react-icons/ai";
import { PageButton } from "../PageButton";
import { UserSessionView } from "../UserSessionView";

export const Header = () => {
    return (
        <div className="h-14 w-full bg-white md:hidden">
            <div className="flex flex-row items-center h-full space-x-2">
                <PageButton path="/" icon={<AiOutlineHome size="1.5rem"/>}>Home</PageButton>
                <PageButton path="/search" icon={<AiOutlineSearch size="1.5rem"/>}>Search</PageButton>
                <PageButton path="/post" icon={<AiOutlineInbox size="1.5rem"/>}>Post</PageButton>
                <UserSessionView/>
            </div>
        </div>
    );
}