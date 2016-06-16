import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-popup',
  templateUrl: 'popup.component.html',
  styleUrls: ['popup.component.css']
})
export class PopupComponent implements OnInit {
  private isVisible:boolean = false;

  constructor() {}

  public show():boolean {
    return this.isVisible = true;
  }

  public hide():boolean {
    return this.isVisible = false;
  }
  

  ngOnInit() {
  }

}
