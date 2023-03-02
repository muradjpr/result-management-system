import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private baseurl = 'http://localhost:3000'
  constructor(private http: HttpClient) {
  }


  getStudents() {
    return this.http.get<any>(`${this.baseurl}/students`)
  }

}
