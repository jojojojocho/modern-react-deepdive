export default function SymbolPage() {
    
    const key = Symbol('key')
    const key2 = Symbol('key')
    
    console.log(key == key2)
    console.log(key === key2)

    const key3 = Symbol.for('hello');
    const key4 = Symbol.for('hello');

    console.log( key3 == key4 )
    console.log( key3 === key4 )

    
    return (
        <></>
    )
}