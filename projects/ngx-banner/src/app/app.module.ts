import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { NgxBannerComponent } from './ngx-banner/ngx-banner.component';

@NgModule({
  declarations: [
    NgxBannerComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [NgxBannerComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(NgxBannerComponent, { injector: this.injector });
    customElements.define('ngx-banner', customElement);
  }

  ngDoBootstrap() {}
}
