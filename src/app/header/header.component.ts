import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
     <mat-toolbar>My App</mat-toolbar>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
