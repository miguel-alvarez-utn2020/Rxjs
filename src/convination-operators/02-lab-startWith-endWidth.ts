import { endWith, startWith } from "rxjs";
import { ajax } from "rxjs/ajax";




const loading = document.createElement('div');
loading.classList.add('loading');
loading.innerHTML = 'Loading';
const body = document.querySelector('body');

ajax.getJSON('https://reqres.in/api/users/2?delay=3').pipe(
    startWith(true),
    endWith(false)
)
.subscribe(resp => {

    if(resp){
        body.append(loading);
    }else{
        loading.remove();
    }
    console.log(resp)

})