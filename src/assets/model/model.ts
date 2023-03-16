export type UserInfo = {
  coverImage: string;
  created_at: string;
  email: string;
  first_name: string | undefined;
  id: number;
  last_name: string | undefined;
  password: string;
  profileImage: string;
  updated_at: string;
};
export type quotesType = {
  id: number;
  userId: number;
  liked: boolean;
  quotes: string;
  date: string;
  photos: onePhoto[];
  profileImage: string;
  created_at: string;
};

export type onePhoto = {
  created_at: string;
  id: number;
  photo: string;
  postId: number;
  updated_at: string;
};
