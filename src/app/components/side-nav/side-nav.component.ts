import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input() sidenav!: MatSidenav;


  @Output() sidenavClose = new EventEmitter<void>();

  constructor() {}


  ngOnInit(): void {}


  public onSidenavClose(): void {
    this.sidenavClose.emit();
    this.sidenav.close();
  }
}
