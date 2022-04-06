type oscarChidren={
    children:string
}
export const Oscar =(props:oscarChidren)=>
{
    return(
        <div>
           {props.children}
        </div>
    );
}