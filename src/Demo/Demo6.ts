const numberArr: number[] = [1, 2, 3]

const stringArr: string[] = ['aaa', 'bbb', 'ccc']

const undefinedARR: undefined[] = [undefined, null, undefined]

const arr2: (number | string)[] = [1, 'ssss', 2]

// 1---------------------------------------------
const person3: { name: string, age: number }[] = [
    { name: 'ameng', age: 20 },
    { name: 'yinmeng', age: 50 }
]
// 2---------------------------------------------
type Person = { name: string, age: number }

const person4: Person[] = [
    { name: 'ameng', age: 20 },
    { name: 'yinmeng', age: 50 }
]
// 3---------------------------------------------

class Person2 {
    name: string;
    age: number
}
const person5: Person2[] = [
    { name: 'ameng', age: 20 },
    { name: 'yinmeng', age: 50 }
]
