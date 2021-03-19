import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '@app/shared';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}/names`);
  }

  addUser(user: Partial<User>): Observable<any> {
    return this.http.post<{}>(`${API_URL}/names/`, user);
  }

  removeUser(id: User['id']): Observable<{}> {
    return this.http.delete<{}>(`${API_URL}/names/${id}`);
  }

  getUser(id: User['id']): Observable<User> {
    return this.http.get<User>(`${API_URL}/names/${id}`);
  }

  editUser(id: User['id'], data: Partial<User>): Observable<User> {
    return this.http.put<User>(`${API_URL}/names/${id}`, data);
  }
}
