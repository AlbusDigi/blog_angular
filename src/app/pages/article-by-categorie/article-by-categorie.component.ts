import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ArticleApi } from '../../models/article-api';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-by-categorie',
  standalone : true,
  imports: [NgFor, ArticleComponent,RouterLink,NgIf],
  templateUrl: './article-by-categorie.component.html',
  styleUrl: './article-by-categorie.component.css'
})
export class ArticleByCategorieComponent {
  @Output() refreshPage = new EventEmitter();
  router: Router = inject(Router);
  route : ActivatedRoute = inject(ActivatedRoute);
  articles! : ArticleApi[] | undefined;
  isConnected: boolean = false;
  userId:number = Number(localStorage.getItem('userId'));
  isAuthor : boolean = false;
  service : CategoryService = inject(CategoryService);
  articleId = -1;
  private articleService = inject(ArticleService);

  async ngOnInit(){
    this.articleId = Number(this.route.snapshot.paramMap.get('id'));
    this.articles = await this.service.getArticleByCategory(this.articleId);
    console.log('Articles récupérés : ', this.articles);
  }

  async onLike() {
    // console.log(this.article);

    try {
      if (this.isConnected) {
        await this.articleService.likeArticle({ articleId: this.articleId });
        this.refreshPage.emit();
      } else {
        alert('Vous devez être connecté pour aimer un article.');

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 0);
      }
    } catch (e) {
      console.error('Erreur lors du like:', e);
    }
  }

  trackById(index: number, item: ArticleApi) {
    return item.id;
  }

}
