import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { LoginDto } from '../shared/models/login.model';
import { RegisterDto } from '../shared/models/register.model';
import { Role } from '../shared/enums';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/api/auth`; 
  private tokenKey = 'access_token';

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((res: any) => {
        localStorage.setItem(this.tokenKey, res.token);
      })
    );
  }

  register(data: RegisterDto) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return token !== null && !this.jwtHelper.isTokenExpired(token);
  }

  getUserRoles(): Role {
    const token = this.getToken();
    if (!token) return ;

    const decodedToken = this.jwtHelper.decodeToken(token);
    const roles = decodedToken['role'] || decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    return Array.isArray(roles) ? roles : roles;
  }
  

  getUsername(): string {
    const token = this.getToken();
    if (!token) return '';
    const decodedToken = this.jwtHelper.decodeToken(token);
    return decodedToken['unique_name'] || decodedToken['name'];
  }
}
