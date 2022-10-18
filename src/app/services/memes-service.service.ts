import { MemeCall } from './../../models/post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { Meme } from 'src/models/post';

@Injectable({
  providedIn: 'root'
})
export class MemesServiceService {

  baseUrl:string = "https://api.imgflip.com/get_memes";
  
  constructor(
    private httpClient: HttpClient
  ) { }

  getMemes(): Observable<MemeCall>{  
    return this.httpClient.get<MemeCall>(this.baseUrl)
    .pipe(
      tap(res=>console.log("meme list suscriber", res)),
      finalize(()=> console.log("llamada finalizada")
      )
    )
  }

}
