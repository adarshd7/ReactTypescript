type PersonNameListProps={
    names:{
        first:string,
        last:string
    }[]
}


export const PersonList=(props:PersonNameListProps)=>{
    return(
        <div>
        {props.names.map( name =>{
        return(   
             <h2>
            {name.first}   {name.last}
            </h2>
            )
        })}
        </div>
    )
}