import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Customer} from "../components/results/results.component";

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) { }

  getCustomersLarge() {
    return this.http.get<any>('./../../assets/customer-large.json')
      .toPromise()
      .then(res => <Customer[]>res.data)
      .then(data => {
        console.log(data)
        return data; });
  }
}
