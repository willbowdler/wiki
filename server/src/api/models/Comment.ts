export interface Comment {
  id: number;
  article_id: number;
  author_id: number;
  content: string;
  created_at: Date;
  updated_at?: Date;
}
