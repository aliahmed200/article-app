export interface createArticleDto {
  title: string;
  description: string;
  image: string;
}
export interface updateArticleDto {
  title?: string;
  description?: string;
}
export interface registerDto {
  username: string;
  email: string;
  password: string;
  image: string;
}
export interface LoginDto {
  email: string;
  password: string;
}

export interface UpdateUserDto {
  username?: string;
  email?: string;
  password?: string;
}

export interface CraeteCommentDto {
  text: string;
  articleId: number;
}
export interface updateCommentDto {
  text?: string;
}
