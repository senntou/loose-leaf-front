import React from "react";

export const Heading : React.FC<{children : string | null}> = ({children}) => {
    return (
        <h1 className="m-10 text-2xl md:text-4xl font-extrabold">{children}</h1>
    );
}