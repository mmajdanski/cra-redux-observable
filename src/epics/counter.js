import { delay, map } from 'rxjs/operators';

export const counterEpic = action$ =>
  action$.ofType("INCREMENT", "DECREMENT")
    .pipe(
     delay(1000), // Asynchronously wait 1000ms then continue
     map((action) => (
      {
       type: 'OBSERVABLE_COMPLETE',
       payload: action.payload
      })
    ))