import { Component } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../models/article';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-article',
  imports: [ArticleComponent, NgFor],
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.css'
})
export class ListArticleComponent {
  articles!:Article[];


  ngOnInit() {
    this.articles=[
    {
      title: 'Mon premier article',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel odio nec nunc ultricies ultricies. Nulla facilisi. Sed nec nunc nec eros',
      auteur: 'Jean Dupont',
      photo: 'https://picsum.photos/200/300',
      created_at: new Date(),
      nb_comments: 0,
      categorie: ['Angular', 'Javascript', 'Typescript'],
      
    },
    {
      title: 'Bonjour',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel odio nec nunc ultricies ultricies. Nulla facilisi. Sed nec nunc nec eros',
      auteur: 'Jean Dupont',
      photo: 'https://picsum.photos/200/300',
      created_at: new Date(),
      nb_comments: 0,
      categorie: ['Angular', 'Javascript', 'Typescript'],
     
    },
  ];

  }


}
