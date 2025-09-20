import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'Project Ants';
}
