
import { Component, ElementRef, HostListener, inject, ViewChild, NgModule } from '@angular/core';
//import { ArticleListComponent } from '../article-list/article-list.component';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NgFor, NgIf } from '@angular/common';
import { ArticleService } from '../../services/article.service';
import { ArticleApi } from '../../models/article-api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgIf, FormsModule, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @ViewChild('searchInput') eRef!: ElementRef;
  isConnected:boolean= false
  name!: string
  email!: string
  route:Router = inject(Router)
  service:UserService= inject(UserService)
  isModalOpen: boolean = false;
  searchQuery: string = '';
  articleService : ArticleService = inject(ArticleService)
  searchResults: ArticleApi[]= [];
  isLoading : boolean = false;
  hasError : boolean = false;


  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.isConnected = !!localStorage.getItem('token');
      this.name = localStorage.getItem('name') || '';
      this.email = localStorage.getItem('email') || '';
    }
  }
  async onSearch() {
    if (this.searchQuery.trim() === '') return;
  
    this.isLoading = true;
    this.hasError = false; 
    this.searchResults = []; 
  
    try {
      const results: ArticleApi[] = await this.articleService.searchArticles(this.searchQuery);
      this.searchResults = results;
    } catch (error) {
      console.error('Erreur de recherche :', error);
      this.hasError = true; 
    } finally {
      this.isLoading = false;
    }
  }
  

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    if (this.isModalOpen && !this.eRef.nativeElement.contains(event.target)) {
      this.isModalOpen = false;
    }
  }

  deconnexion() {
    localStorage.clear();
    this.isConnected = true;
    this.route.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
