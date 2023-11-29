export default function undefinedPage() {

    let foo;

    console.log(typeof foo === 'undefined')

    const bar = (hello) =>{
        return hello
    }

    console.log(typeof bar() === 'undefined')

    return (
        <>
        </>
    )
}