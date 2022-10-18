import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() filterList = new EventEmitter();
  @Output() refreshCall = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  refreshList(){
   this.refreshCall.emit()
  }

  searchList(filter:any){ 
    this.filterList.emit(filter.target.value)
  }

}
