import { Component, OnInit, Input } from '@angular/core';
import { Meme } from 'src/models/post';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  @Input() item?: Meme;

  constructor() { }

  ngOnInit(): void {
  }

}
