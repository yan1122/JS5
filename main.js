//сортировка массива от меньшего к большему bubbles

const array = [777,23,12,43,32,65,82,21,0,99]
for (let j=0;j<array.length - 1;j++){
for (let i=0;i<array.length - 1 - j;i++){
    if(array[i] > array[i+1]){
        let temp = array[i+1]
        array[i+1] = array[i]
        array[i] = temp
    }
}
}

// sort

const names = ['Bob','Alex','Donald','Ramzan']
names.sort()
console.log(names)

const numbers = [111,1,56,124,51,9]

// sort => CompareFunc

function comp (a,b) {
    if(a<=b){
        return -1
    }else {
        return 2
    }
}


console.log(numbers.sort(comp))

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
];

console.log(students.sort((a,b) => b.scores - a.scores))






