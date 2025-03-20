import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ListArticleComponent } from './list-article/list-article.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
}
