import { concat, interval, take } from "rxjs";




const interval$ = interval(1000);


concat(
    interval$.pipe(take(2)),
    interval$.pipe(take(4)),
    [1,2,54]
).subscribe(console.log)