import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  bundles = ['ngx-banner-bundle', 'ngx-footer-bundle'];

  constructor() {
  }

  ngOnInit() {
    // this.bundles
    // .forEach(name => document.body.appendChild(this.getScriptTag(name)));
  }

  getScriptTag(fileName: string): HTMLElement {
    const scriptTag = document
      .createElement(`script`);

    scriptTag.setAttribute('src', `../assets/${fileName}.js`);
    scriptTag.setAttribute('type', 'text/javascript');

    return scriptTag;
  }
}
