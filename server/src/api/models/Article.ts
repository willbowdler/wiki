export interface Article {
  id: number;
  title: string;
  description?: string;
  comments?: string;
  content: string;
  created_at: Date;
  updated_at?: Date;
  author_id: number;
  slug?: string;
}
