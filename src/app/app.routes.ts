import { Routes } from '@angular/router';
import { ArticleListComponent } from './pages/article-list/article-list.component';
import { CategoryComponent } from './pages/category/category.component';
import { SingleComponent } from './pages/single/single.component';
import { CreateArticleComponent } from './pages/create-article/create-article.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateCategoryComponent } from './pages/create-category/create-category.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { RegisterComponent } from './pages/register/register.component';
import { TagListComponent } from './pages/tag-list/tag-list.component';
import { CreateTagComponent } from './pages/create-tag/create-tag.component';
import { EditArticleComponent } from './pages/edit-article/edit-article.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleByCategorieComponent } from './pages/article-by-categorie/article-by-categorie.component';
import { ArticleByTagComponent } from './pages/article-by-tag/article-by-tag.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'articles',
    component: ArticleListComponent,
  },
  {
    path: 'categories',
    component: CategoryListComponent,
  },
  {
    path: 'article/:id',
    component: SingleComponent,
  },
  {
    path: 'create-article',
    component: CreateArticleComponent,
  },
  {
    path: 'create-category',
    component: CreateCategoryComponent,
  },
  {
    path: 'newsletter',
    component: NewsletterComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path : 'tags',
    component : TagListComponent
  },
  {
    path : 'create-tag',
    component : CreateTagComponent
  },
  {
    path:'edit/:id',
    component:EditArticleComponent,
  },
  {
    path : 'categories/:id',
    component : ArticleByCategorieComponent
  },
  {
    path : 'tags/:id',
    component : ArticleByTagComponent
  }
];
