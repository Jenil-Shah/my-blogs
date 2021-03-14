import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @Input() page: number;

  @Output() newPage = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  previousPage()
  {
    window.scroll(0,0);
    if(this.page > 1) this.newPage.emit(this.page - 1);
  }

  nextPage()
  {
    window.scroll(0,0);
    this.newPage.emit(this.page + 1);
  }

}
