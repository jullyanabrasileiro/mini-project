import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav-list', 
  templateUrl: './side-nav-list.component.html', 
  styleUrls: ['./side-nav-list.component.css'] 
})
export class SideNavListComponent implements OnInit {  

  @Output() sidenavClose = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  public onSidenavClose = (): void => {
    this.sidenavClose.emit();  
  }
}
