import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {FullPost} from "./fullpost";
import {Post} from "./post";



@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = "/api/posts/";

  constructor(private http: HttpClient) { }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
  
      console.error(error); // log to console instead
  
      
      console.log(`${operation} failed: ${error.message}`);
  
     
      return of(result as T);
    };
  }
  

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.url).pipe(

      catchError(this.handleError<Post[]>('getPosts', []))
    );

  }

  getTopPosts():Observable<Post[]>{
    return this.http.get<Post[]>("/api/featured/").pipe(

      catchError(this.handleError<Post[]>('featured', []))
    );
  }

  getFullPost(id: string): Observable<FullPost>{
    return this.http.get<FullPost>(this.url + id).pipe(

      catchError(this.handleError<FullPost>('getFullPost')));
    
  }
}
