export interface Folder {
  id: number;
  created_at: string; // ISO date string
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}
