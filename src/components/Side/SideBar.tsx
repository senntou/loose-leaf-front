



export const SideBar = () => {
    return (
        <div className="flex flex-col h-4/5 w-full items-center border">

            <div>
                <div className="flex w-[12rem] h-10 mt-3 mb-10 bg-cyan-600"/>
            </div>

            <div className="flex h-10 p-3 mx-auto space-x-1 bg-gray-400 rounded-full items-center">
                <img className="max-h-7 rounded-full -ml-1" src="/imgs/home.jpg" alt="home" />
                <h3 className="text-base ">HOME</h3>
            </div>
                        
        </div>
    );
}
