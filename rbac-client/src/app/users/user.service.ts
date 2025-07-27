import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/api/user`;

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUserById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  
  createUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
  
  updateUser(id: string, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id:string){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}
