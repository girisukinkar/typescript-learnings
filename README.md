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


## 01 - Types
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

    let obj = object; 
```

Note : always set a empty array value else it will give you error while using array push() function