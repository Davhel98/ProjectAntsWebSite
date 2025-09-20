import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GameService } from '../../services/game';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent implements OnInit {
  gameInfo: any = {
    title: 'Welcome to Project Ants',
    trailer: {
      youtubeId: 'BUVdq6scQiE',
      title: 'Trailer'
    }
  };

  // Nuovi video aggiuntivi (ordine dopo il trailer principale)
  additionalVideos: { id: string; title: string; url?: SafeResourceUrl; }[] = [
    { id: 'Njnlwp-Q1Eo', title: 'Walkthrough' },
    { id: 'AOFmMNohCjc', title: 'Combos' }
  ];

  constructor(
    private gameService: GameService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loadGameInfo();
    this.prepareAdditionalVideos();
  }

  private loadGameInfo(): void {
    this.gameService.getGameInfo().subscribe({
      next: (data) => { this.gameInfo = data; },
      error: (error) => { console.error('Error loading game info:', error); }
    });
  }

  private prepareAdditionalVideos(): void {
    this.additionalVideos = this.additionalVideos.map(v => ({
      ...v,
      url: this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${v.id}`)
    }));
  }

  getYouTubeUrl(): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${this.gameInfo.trailer.youtubeId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
