import { Location } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'flutterflow-seo-poc';

  constructor(private location: Location) {
    setTimeout(() => this.initFlutterApp(), 800);
  }

  ngOnInit() {}

  initFlutterApp() {
    const url = this.location.path();
    console.log('url', url);

    const view = document.getElementsByTagName('flt-glass-pane').item(0);
    const canvasEl = view?.shadowRoot?.querySelector('canvas');

    if (!canvasEl) return;

    // canvasEl.style.border = '1px solid red';
    // canvasEl.style.width = '99vw';
    // canvasEl.style.height = '99vh';
    // canvasEl.style.position = 'relative';

    // canvasEl.classList.add('flutter-canvas');

    console.log('view', view);
    console.log('shadowRoot', canvasEl);
  }
}
