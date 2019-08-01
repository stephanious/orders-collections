// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { map, catchError } from 'rxjs/operators';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ServerService {
//   constructor(private http: HttpClient) { }

//   storeServers(servers: any[]) {
//     const headers = new HttpHeaders({'Content-Type': 'application/json'});
//     return this.http.post('https://test-services-47943.firebaseio.com/data.json', servers , { headers }).toPromise();
//   }

//   getServers() {
//     return this.http.get('https://test-services-47943.firebaseio.com/data.json')
//     .pipe(
//       map(
//         (response: Response) => {
//           const data = response.json();
//           // for (const server of data) {
//           //   server.name = 'Fetched_' + server.name;
//           // }
//           return data;
//         }
//       ),
//       catchError(
//         (error: Response) => {
//           console.log(error);
//           return Observable.throw(error);
//         }
//       )
//     );
//   }
// }
