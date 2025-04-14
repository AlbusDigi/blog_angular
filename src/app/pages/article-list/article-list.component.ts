import { Component, inject } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { NgClass, NgFor, NgForOf, NgIf } from '@angular/common';
import { ArticleService } from '../../services/article.service';
import { ArticleApi } from '../../models/article-api';
import { RouterLink } from '@angular/router';
import { Links } from '../../models/links';
import { Meta } from '../../models/meta';

@Component({
  selector: 'app-article-list',
  imports: [ArticleComponent, NgFor, RouterLink, NgForOf, NgClass, NgIf],
  templateUrl: './article-list.component.html',
  standalone: true,
  styleUrl: './article-list.component.css',
})
export class ArticleListComponent {
  articles: ArticleApi[] = []; // <- éviter le ! ici
  service: ArticleService = inject(ArticleService);
  links?: Links;
  meta?: Meta;
  isConnected: boolean = false;
  isLoading: boolean = true; // <- Ajout

  onRefreshPage() {
    this.getAll();
  }

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.isConnected = !!localStorage.getItem('token');
    }
    this.getAll();
  }

  
  getAll(link?: string) {
    this.isLoading = true; // <- Démarrer le loader

    this.service
      .getAll(link)
      .then((reponse) => {
        this.articles = reponse.data;
        this.links = reponse.links;
        this.meta = reponse.meta;
        this.isLoading = false; // <- Arrêter le loader
        console.log('reponse:', reponse);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des articles:', error);
        this.isLoading = false; // <- Assurer l'arrêt même en cas d'erreur
      });
  }

  next() {
    if (this.links?.next) {
      this.getAll(this.links.next);
    }
  }

  prev() {
    if (this.links?.prev) {
      this.getAll(this.links.prev);
    }
  }

  pagine(url?: string) {
    if (url) {
      this.getAll(url);
    }
  }
}
