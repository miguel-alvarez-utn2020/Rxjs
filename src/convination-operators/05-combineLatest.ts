import { fromEvent, map, merge, combineLatest } from "rxjs";

//reference
const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'migue@gmail.com';
input2.placeholder = '*******'
input2.type = 'password';
document.querySelector('body').append(input1, input2);


const getinputStream = (elem : HTMLElement) => 
    fromEvent<KeyboardEvent>(elem, 'keyup')
    .pipe(
        map<KeyboardEvent, string>((resp: any) => resp.target.value)
    )

combineLatest(
    getinputStream(input1),
    getinputStream(input2),

).subscribe(console.log)