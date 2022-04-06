import React from "react";

type componentWithinComponent={
children:React.ReactNode
}

export const Heading=(props:componentWithinComponent)=>
{
    return(
        <div>
                {props.children}
        </div>
    );
}