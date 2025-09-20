import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GameService } from '../../services/game';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent implements OnInit {
  gameInfo: any = {
    title: 'Welcome to Project Ants',
    trailer: {
      youtubeId: '_aTRBidF26o',
      title: 'Project Ants Game Trailer'
    }
  };

  constructor(
    private gameService: GameService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loadGameInfo();
  }

  private loadGameInfo(): void {
    this.gameService.getGameInfo().subscribe({
      next: (data) => {
        this.gameInfo = data;
      },
      error: (error) => {
        console.error('Error loading game info:', error);
        // Keep default values if API fails
      }
    });
  }

  getYouTubeUrl(): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${this.gameInfo.trailer.youtubeId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
