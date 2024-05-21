import { interval, fromEvent} from 'rxjs'
import { sample } from 'rxjs/operators'

const interval$ = interval(500);
const click$ = fromEvent<PointerEvent >(document, 'click');



interval$.pipe(
    //Obtendremos una muestra del estado del observable interval cuando demos click
    sample(click$),
).subscribe(console.log)