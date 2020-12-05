import { Injectable, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, of, Subscription } from 'rxjs';
import { environment } from 'environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError , map} from 'rxjs/operators';

const API_USERS_URL = environment.apiUrl;
@Injectable({
    providedIn: 'root',
  })

  export class AppService implements OnDestroy {

    private unsubscribe: Subscription[] = [];
     // new fields 
    private headers= new HttpHeaders('Content-Type: application/x-www-form-urlencoded; charset=UTF-8; Access-Control-Allow-Headers:*');

    constructor(
        private http: HttpClient,
        
        private router: Router
      ) {}

      getSchoolYears(): Observable<any>
      {
          return this.http.get<any>(API_USERS_URL+'/schoolYears_list')        
          .pipe(data => { 
            return data         
          });                 
      }

    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
      }
  }
