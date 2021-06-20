let character:string = "marios";
let age:number = 30;
let isBlackBelt:boolean = false;

let mixed: (string|boolean)[] = [];
mixed.push('hello');
mixed.push(true);


const circ = (diameter:number) =>{
    return diameter * Math.PI;
}

console.log(circ(2));

//This function has a optional paramtere called c and returns a number type value
const add: Function = (a:number ,b:number , c: number | string = 10 ):number => {
    console.log(a,b);
    console.log(c);
    return a + b;

}

add(10,20,10);