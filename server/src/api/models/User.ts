export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: "admin" | "editor" | "user";
  created_at: Date;
  updated_at?: Date;
}
