import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  @Output() sidenavClose = new EventEmitter();
  constructor() {}
  ngOnInit() {}
  public onSidenavClose = () => {
      this.sidenavClose.emit();
  }
}
