import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getGameInfo(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/game-info`).pipe(
      catchError(error => {
        console.error('Error fetching game info:', error);
        // Return fallback data if API is not available
        return of({
          title: 'Welcome to Project Ants',
          version: '1.0.0',
          features: [

          ],
          trailer: {
            youtubeId: 'BUVdq6scQiE',
            title: 'Project Ants Game Trailer'
          }
        });
      })
    );
  }

  getGallery(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/gallery`).pipe(
      catchError(error => {
        console.error('Error fetching gallery:', error);
        return of({ images: [] });
      })
    );
  }

  submitContact(contactData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/contact`, contactData).pipe(
      catchError(error => {
        console.error('Error submitting contact form:', error);
        return of({ 
          success: false, 
          message: 'Failed to send message. Please try again later.' 
        });
      })
    );
  }
}