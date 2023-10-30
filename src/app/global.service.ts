import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, tap } from 'rxjs';
import { User } from './types/user';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  baseUrl = 'https://product-feedback-f6nw.onrender.com/api/v1'
  user: User = JSON.parse(localStorage.getItem('user') || '{}');
  allProductRequests: any;
  isLoading: boolean;

  constructor(private http: HttpClient) {}

  httpHeaders: HttpHeaders = new HttpHeaders({
    Authorization: `Bearer ${this.user?.token}`,
  });

  getAllProductRequests() {
    if (!this.allProductRequests) {
      return this.http.get(`${this.baseUrl}/product-requests`).pipe(
        tap((result) => {
          this.allProductRequests = result;
        })
      );
    }

    return of(this.allProductRequests);
  }

  signup(
    firstname: string,
    lastname: string,
    username: string,
    password: string
  ) {
    return this.http.post(`${this.baseUrl}/users`, {
      username,
      password,
      firstname,
      lastname,
    });
  }

  login(username: string, password: string) {
    return this.http.post(`${this.baseUrl}/users/login`, {
      username,
      password,
    });
  }

  addProductRequest(title: string, category: string, description: string) {
    return this.http.post(
      `${this.baseUrl}/product-requests`,
      {
        title,
        category,
        description,
        status: 'suggestion',
      },
      {
        headers: this.httpHeaders,
      }
    );
  }

  getSingleProductRequest(id: string) {
    return this.http.get(`${this.baseUrl}/product-requests/${id}`);
  }

  editProductRequest(id: string) {}

  deleteProductRequest(id: string) {}

  postComment(comment: string) {
    return this.http.post(
      `${this.baseUrl}/comments`,
      {
        comment,
      },
      {
        headers: this.httpHeaders,
      }
    );
  }
}
