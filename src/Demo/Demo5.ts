function getTotal(one, two): number {
    return one + two
}

const total2 = getTotal(1, 2)


console.log(total)


function sayHello(): void {
    console.log('hello world')
}


function errFun(): never {
    throw new Error()
    console.log("xxxx")
}

function forFun(): never {
    while (true) { }
    console.log("xxxx")
}

function add({ one, two }: { one: number, two: number }) {
    return one + two
}

const total3 = add({ one: 1, two: 2 })


function getNumber({ one }: { one: number }) {
    return one
}

const one = getNumber({ one: 1 })