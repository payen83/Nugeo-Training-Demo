import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL: string;

  constructor(public httpClient: HttpClient) { 
    this.baseURL = 'https://nre.appsmalaya.com/warehouse/api/';
  }

  getInventory(){
    let url: string = this.baseURL + 'get-all-inventory';

    return new Promise((resolve, reject) => {
      this.httpClient.get(url)
      .subscribe((response: any) => {
        if(response.feedData){
          resolve(response.feedData);
        } else {
          reject(response);
        }
      }, (error) => { reject(error); })
    })
  }
  
  login(user: any){
    let url: string = this.baseURL + 'login';
    let body: any = {
      'username': user.username,
      'password': user.password
    }

    return new Promise((resolve, reject) => {
      this.httpClient.post(url, body)
      .subscribe((response: any) => {
        if(response.userData){
          resolve(response.userData);
        } else {
          reject(response);
        }
      }, (error) => { reject(error); })
    })

  }


}
