import { Injectable, SimpleChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  baseUrl = 'https://product-feedback-f6nw.onrender.com/api/v1';
  allProductRequests: any;
  isLoading: boolean;

  constructor(private http: HttpClient) {}

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
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const header = new HttpHeaders().set(
      'Authorization',
      `Bearer ${user.token}`
    );
    const headers = { headers: header };
    return this.http.post(
      `${this.baseUrl}/product-requests`,
      {
        title,
        category,
        description,
        status: 'suggestion',
      },
      headers
    );
  }

  getSingleProductRequest(id: string) {
    return this.http.get(`${this.baseUrl}/product-requests/${id}`);
  }

  editProductRequest(id: string) {}

  deleteProductRequest(id: string) {}

  postComment(comment: string) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const header = new HttpHeaders().set(
      'Authorization',
      `Bearer ${user.token}`
    );
    const headers = { headers: header };
    return this.http.post(
      `${this.baseUrl}/comments`,
      {
        comment,
      },
      headers
    );
  }
}
