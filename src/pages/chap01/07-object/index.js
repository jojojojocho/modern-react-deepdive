export default function ObjPage() {
    console.log(typeof [] === 'object');
    console.log(typeof {} === 'object');


    function hello() {
    }
    console.log(typeof hello === 'function');

    const hello1 = function() {

    }

    const hello2 = function() {
    }


    console.log(hello1 === hello2);

    
    return (
        <></>
    )
}