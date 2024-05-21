import { Observable, debounceTime, fromEvent, map, mergeAll } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { GitHubUser } from '../interfaces/github-user.interface';
import { GitHubUsersResponse } from '../interfaces/github-users-response.interface';



//referencias 

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

/**
 * Como vemos en este problema, se esta haciendo un poco tedioso
 * poder controlar nuestra cadena de observables, ya que al recibir otro
 * observable, devemos volver a subscribirnos para  obtener los valores
 * emitidos. Para solucionar esto
 * es que necesitamos nuestros flatting operators u operadores de aplanamiento
 */
//problema
// input$.pipe(
//     debounceTime(500),
//     map(resp => {
//        const text =  resp.target['value']

//         return ajax.getJSON(`https://api.github.com/users/${text}`);
//     })
// ).subscribe( resp => {
//     resp.pipe(
//         map(resp => resp['name'])
//     )
//     .subscribe( console.log )
// } )

//Primer solución con mergeAll

//helpers
const showUsers = ( users: GitHubUser[] ) => {

    console.log(users);
    orderList.innerHTML = '';
    for (const user of users) {
        const li: HTMLElement = document.createElement('li');
        const img: HTMLImageElement = document.createElement('img');
        img.src = user.avatar_url;
        const link = document.createElement('a');
        link.href = user.html_url;
        link.text = 'Ver Página ';
        link.target = '_blank'
        
        li.append(img, user.login + ' ', link);

        orderList.append(li);
    }
    
    
}

//streams

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(keyboard => keyboard.target['value']),
    map<string, Observable<GitHubUsersResponse>>(text => ajax.getJSON(`https://api.github.com/search/users?q=${text}`)),
    mergeAll<Observable<GitHubUsersResponse>>(),
    map<GitHubUsersResponse, GitHubUser[]>(resp => resp['items']),

).subscribe( (resp: GitHubUser[]) => {
    showUsers(resp);
} )


