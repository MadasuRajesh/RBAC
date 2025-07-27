import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Content } from '../models/content.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private apiUrl = `${environment.apiUrl}/api/content`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Content[]> {
    return this.http.get<Content[]>(this.apiUrl);
  }

  getById(id: number): Observable<Content> {
    return this.http.get<Content>(`${this.apiUrl}/${id}`);
  }

  create(content: Content): Observable<Content> {
    return this.http.post<Content>(this.apiUrl, content);
  }

  update(id: number, content: Content): Observable<Content> {
    return this.http.put<Content>(`${this.apiUrl}/${id}`, content);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
