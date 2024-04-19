import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) {  }

  getPosts(): Observable<any[]> {
    const authToken = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    return this.http.get<any[]>(this.baseUrl + 'getPostsByUserId?user_id='+localStorage.getItem('user_id'), { headers });
  }

  getAllPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'getPosts');
  }

  addPost(post: any): Observable<any> {
    const authToken = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    return this.http.post<any>(this.baseUrl + 'addPost', post, { headers });
  }

  updatePost(post: any): Observable<any> {
    const authToken = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
    return this.http.put<any>(this.baseUrl + 'modifyPost?user_id='+localStorage.getItem('user_id'), post, { headers });
  }

  deletePost(post: any): Observable<any> {
    const authToken = localStorage.getItem('authToken');
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }),
      body: post,
    };
    return this.http.delete<any>(this.baseUrl + 'deletePost', options);
  }

}
