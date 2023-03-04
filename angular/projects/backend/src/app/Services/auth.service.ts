
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {UserModel} from "../models/user.model";
import {BehaviorSubject, Observable, throwError} from "rxjs";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private baseurl = 'http://localhost:3000/users';

  private user:UserModel = {
    id: -1,
    name:'',
    email: '',
    password: ''

  }

  private user$ = new BehaviorSubject<UserModel>(this.user)
  private authState$ = new BehaviorSubject<boolean>(false)

  constructor(private  http: HttpClient, private router: Router) {  }

  get currentUser() {
    return this.user$.asObservable()
  }

  get currentState() {
    return this.authState$.asObservable()
  }


  //user login
  login(email: string, password: string) {
    return this.http.post<any>(`${this.baseurl}/login`, {email, password}, {
      withCredentials: true,
    }).pipe(
      tap(value => {
        if(value.success) {
          const userinfo = JSON.stringify({...value.user, token: value.token})
          localStorage.setItem('loggedUser', userinfo);
          localStorage.setItem('access_token', value.token);
          this.authState$.next(true)
          this.user$.next(value.user)
        } else {
          this.authState$.next(false)
        }
      })
    )
  }
  get isLoggedIn(): boolean {
    const authToken  = localStorage.getItem('access_token');

    return authToken !== null ? true : false;
  }





  //get token
  getToken() {
    return localStorage.getItem('access_token');
  }

  //user registration
  register(user: UserModel) {
    return this.http.post(`${this.baseurl}/register`, user,httpOptions )
  }

  logout() {
    this.http.post(this.baseurl + '/' + 'logout', {}, httpOptions)
      .subscribe({
        next: (res:any) => {
          if (res.success) {
            localStorage.removeItem('access_token')
            this.router.navigateByUrl('/login').then()
          }
        }
      })

  }





  getAll() {
    return this.http.get<any[]>(`${this.baseurl}/`)
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

}
