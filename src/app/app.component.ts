import { Location } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { Component, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public links: string[] = [
    'https://www.google.com/',
    'https://flutterflow-seo-poc.vercel.app',
    'https://flutterflow-seo-poc.vercel.app/initial',
    'https://flutterflow-seo-poc.vercel.app/home/SP/Suzano',
  ];

  constructor(
    private meta: Meta,
    private location: Location,
    private renderer: Renderer2
  ) {
    this.initSEO();
  }

  ngOnInit() {}

  initSEO(): void {
    const keywords = [
      'saúde',
      'médico',
      'clínica médica',
      'consulta médica',
      'agendamento médico',
      'marcação de consulta',
    ];

    this.meta.addTag({ name: 'robots', content: 'all' });
    this.meta.addTag({ name: 'author', content: 'Cliconsulta' });
    this.meta.addTag({ property: 'og:type', content: 'website' });
    this.meta.addTag({ name: 'publisher', content: 'Cliconsulta' });
    this.meta.addTag({ name: 'keywords', content: keywords.join(', ') });

    this.setUrlSEO();
    window.addEventListener('onRouteChange', () => this.setUrlSEO());
  }

  setUrlSEO() {
    const { full } = this.getCurrentDomainAndPath();

    const existingOgURL = document.getElementById('cli-seo-orURL');
    if (existingOgURL) this.renderer.removeChild(document.head, existingOgURL);

    const existingCanonical = document.getElementById('cli-seo-canonical');
    if (existingCanonical)
      this.renderer.removeChild(document.head, existingCanonical);

    const ogURL = this.renderer.createElement('meta');
    this.renderer.setAttribute(ogURL, 'content', full);
    this.renderer.setAttribute(ogURL, 'property', 'og:url');
    this.renderer.setAttribute(ogURL, 'id', 'cli-seo-orURL');
    this.renderer.appendChild(document.head, ogURL);

    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'href', full);
    this.renderer.setAttribute(link, 'rel', 'canonical');
    this.renderer.setAttribute(link, 'id', 'cli-seo-canonical');
    this.renderer.appendChild(document.head, link);
  }

  getCurrentDomainAndPath(): ILocationURLData {
    const currentUrl = this.location.path();
    const parser = document.createElement('a');
    parser.href = currentUrl;

    return {
      domain: parser.origin,
      path: parser.pathname,
      full: `${parser.origin}${parser.pathname}`,
    };
  }
}

export interface ILocationURLData {
  domain: string;
  path: string;
  full: string;
}
