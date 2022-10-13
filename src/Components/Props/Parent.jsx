import Child from "./Child";

function Parent(){
    return(
        <>
        <h1>This is the Parent</h1>
        <Child
        name="joker"
        age={5}
        />
        </>   
        )
}

export default Parent;