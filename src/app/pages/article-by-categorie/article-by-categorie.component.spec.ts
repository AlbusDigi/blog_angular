import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleByCategorieComponent } from './article-by-categorie.component';

describe('ArticleByCategorieComponent', () => {
  let component: ArticleByCategorieComponent;
  let fixture: ComponentFixture<ArticleByCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleByCategorieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleByCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
