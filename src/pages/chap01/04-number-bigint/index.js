export default function NumberBigInt() {

    const a = 1;
    console.log("--------------------------Number --------------")

    const maxInteger = Math.pow(2,53)
    console.log(maxInteger -1 === Number.MAX_SAFE_INTEGER)

    const minInteger = -(Math.pow(2,53)-1)
    console.log(minInteger === Number.MIN_SAFE_INTEGER)

    const 이진수_2 = 0b10
    console.log(이진수_2 == (2).toString(2))
    console.log(이진수_2)
    console.log((2).toString(2))

    const 팔진수_8 = 0o10
    console.log(팔진수_8 == (8).toString(8))


    console.log(10 == (10).toString(10))

    const 십육진수_16 = 0x10
    console.log(십육진수_16 == (16).toString(16))

    console.log("--------------------------bigint --------------")

    console.log(9007199254740992 === 9007199254740993)
    
    const maxInteger1 = Number.MAX_SAFE_INTEGER
    console.log(maxInteger1 +5 === maxInteger1 +6)

    const bigInt1 = 9007199254740995n
    const bigInt2 = BigInt('9007199254740995')

    console.log(bigInt1)
    console.log(bigInt2)

    const number = 9007199254740992
    const bigint = 9007199254740992n

    console.log(typeof number)
    console.log(typeof bigint)

    console.log(number == bigint)
    console.log(number === bigint)

    console.log(bigint === (bigint + 1n))
    console.log(bigInt2 + 1n === (bigInt2 + BigInt('1')))

    return(
        <></>
    )
}