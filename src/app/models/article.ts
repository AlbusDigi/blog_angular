export interface Article {
   
    title: string;
    content: string;
    
    auteur: string;
    photo: string;
    
    created_at:Date;
    nb_comments: number;
    categorie: string[];
}