import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/a5719fee-e0a0-42a8-bce3-c9b66a0166b2';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private httpClient: HttpClient) { }

  //Retorna a lista de usuarios READ
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl)
  }

  //Salva usuario no banco CREATE
  postUser(user: User):Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);
  }
}
