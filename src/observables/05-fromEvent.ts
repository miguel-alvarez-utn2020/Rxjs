import { fromEvent } from 'rxjs';


const src1$ = fromEvent<PointerEvent >(document, 'click')
const src2$ = fromEvent<KeyboardEvent >(document, 'keyup')

src1$.subscribe( (resp: PointerEvent ) => {
    console.log(resp);
    
} )

src2$.subscribe( (resp: KeyboardEvent )=> {
    console.log(resp.key);
} )