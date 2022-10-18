import { Component, OnInit } from '@angular/core';
import { map, Subject, takeUntil } from 'rxjs';
import { MemesServiceService } from 'src/app/services/memes-service.service';
import { Meme } from 'src/models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  listMemes:Meme[] = [];
  destroySus = new Subject();
  filterSentence:string = "";

  constructor(
    private memeService: MemesServiceService
  ) { }

  ngOnInit(): void {
    this.memeService.getMemes()
    .pipe(
      takeUntil(this.destroySus),
      map(data => {
         return data.data.memes;
      })
    )
    .subscribe(res=>{   
      this.listMemes = res;
      console.log("lista", this.listMemes);
      
    })
  } 

  filterLIst(word:string){
    this.filterSentence = word ?? "";
  }

  refreshWindow(event:any){ 
    window.location.reload()
  }


  ngOnDestroy(): void {
    this.destroySus.next(false);
  }

  
}
