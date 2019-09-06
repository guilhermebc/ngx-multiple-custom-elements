import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { NgxFooterComponent } from './ngx-footer/ngx-footer.component';


@NgModule({
  declarations: [ NgxFooterComponent ],
  imports: [ BrowserModule ],
  providers: [],
  bootstrap: [],
  entryComponents: [ NgxFooterComponent ],
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(NgxFooterComponent, { injector: this.injector });
    customElements.define('ngx-footer', customElement);
  }

  ngDoBootstrap() {}
}
