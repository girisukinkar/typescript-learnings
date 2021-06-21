# typescript-learnings

## Features

    - Alternative to javascript(superset)
    - Allows us to use strict types which help catch bugs at the compilation level
    - Supports moden features
    - Extra features (generics, interfaces,tuples etc)


# Typescript compiler   
As browser does not understand the typescript it needs to be compiled to regular javascript
```
    npm install -g typescript
```
```
    tsc sandbox.ts //this will translate typescript code to javascript
```
Add  `-w` stands for watch to automatically compile on every save


## 01 - Types , Union Types and Optional Parameters
Once the type is defined it won't change
``` javascript 
    let character: string
    let age :number
```

Union Types : 
Below example shows a array can have several types of data you specify.

``` javascript 
    let mixed : (string|boolean)[] : [];
    mixed.push('hello'); //allowed
    mixed.push(23); // Not allowed
    mixed.push(true); //allowed

    //If you want any type of data in the array use *any*
    let mixed : any[] = [];
    mixed.push('hello'); //allowed
    mixed.push(23); // allowed
    mixed.push(true); //allowed

    let obj = object; 

    //How to set optional parameter to function
    let add: Function;
    //here the question mark ? denotes its a optional parameter 
    //and the value 10 is default value
    //But you cannot use  ? and the default value at the same time
    
    add = (a :number, b : number, c?: number|string) => {
        console.log(c);
        return a + b;
    }
    add = (a :number, b : number, c: number|string = 10) => {
        console.log(c);
        return a + b;
    }
    //What type of value it returns? Yes you are right number
    add = (a :number, b : number, c: number|string = 10):number => {
        console.log(c);
        return a + b;
    }

```

Note : always set a empty array value else it will give you error while using array push() function


## Workflow and tsconfig
This command creates the tsconfig file where you can decide the input output directory and various other things
```
tsc --init
```

Note : if you want to only compile files set in the int rootDir path use 

"include": ['src'] //src being the path of typescript files


## 02 - Type Alias
Since same types can be repeated in multiple places we can create a general type and reuse it

```javascript

    //BEFORE
    const logger = (uid: string | number) => uid;
    const logger1 = (uid: string | number) => uid;
    //We are repeating the type

    //AFTER
    type StringOrNum = string | number;
    const logger = (uid: StringorNum) => uid;
    const logger1 = (uid: StringorNum) => uid;

```

## 03 - Function Signatures

The type of params in the function and its return type can be inferred explicitly 

```javascript
    let calc:(a:number, b:number, c:string) => number;

    //here the function we dont write the return type as the above code matches the signature
    calc = (numOne:number, numTwo:number, action:string) =>{
        return action === 'add' ? numOne + numTwo ? numOne - numTwo;
    }
```

## 04 - DOM & Type Casting

Typescript is so smart it has a special type for every DOM element

```javascript
    
    //Eg : if you hover on below line tsc shows its anchor type element
    const anchor = document.querySelector('a');
    console.log(anchor);

    //But if you try to access a element by class
    const anchor = document.querySelector('.new-item');
    //Typescript will say only type element as its not sure 

    //The fix is giving it a type
    const anchor = document.querySelector('.new-item') as HTMLFormElement;
```

## 05 - Classes
Passing the values to the constructors directly with modifiers
example
```javascript
export class Invoice{
  
    constructor(
        readonly client:string,
        private details:string,
        public amount:number){

    }

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}

```
