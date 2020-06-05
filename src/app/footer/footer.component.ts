import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
      <footer fxFlexOffset="auto">

      <p>Direccion general de cultura y educación</p>

      </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
