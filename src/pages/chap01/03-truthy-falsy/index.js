export default function TruthyFalsy(){

    if(1){
        console.log("if(1)")
    }

    if(0){
        console.log("if(0)")
    }

    if(NaN){
        console.log("if(NaN)")
    }

    console.log("Boolean(1)", Boolean(1))
    console.log("Boolean(0)", Boolean(0))
    console.log("Boolean(true)", Boolean(true))

    return (
        <></>
    )
}