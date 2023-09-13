// app.js
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const numbers = of(1, 2, 3, 4, 5);

numbers.pipe(
  map(x => x * 2)
).subscribe(result => {
  console.log(result);
});