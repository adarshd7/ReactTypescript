type Personprops = {
    name:{
        first:string,
        last:string
    }
}
export const Person=(props:Personprops)=>
{
    return <div>Hi Welcome {props.name.first} hello {props.name.last}</div>
}