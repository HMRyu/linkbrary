export interface User {
  id: number;
  created_at: Date;
  name: string;
  image_source: string;
  email: string;
  auth_id?: string;
}
