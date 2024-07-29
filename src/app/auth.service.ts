import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

fakeStoreApiURL = "https://fakestoreapi.com/"
constructor(public http : HttpClient) { }

getDataFromServer(productType : string){
  return this.http.get<any>(`${this.fakeStoreApiURL}products/${productType}`)
}
}
