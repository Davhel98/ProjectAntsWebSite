import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, AboutComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'Project Ants';
  currentSection = 'home';

  constructor() {
    // Listen for hash changes
    window.addEventListener('hashchange', () => {
      this.handleNavigation();
    });
    
    // Handle initial load
    this.handleNavigation();
  }

  private handleNavigation(): void {
    const hash = window.location.hash.slice(1) || 'home';
    this.currentSection = hash;
  }
}
