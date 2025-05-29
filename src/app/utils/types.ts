import { Article, Comment, User } from "@/generated/prisma";
export type JWTPayload = {
  id: number;
  isAdmin: boolean;
  username: string;
  email: string;
  image: string;
};

export type User = {
  id: number;
  isAdmin: boolean;
  username: string;
  image: string;
  email: string;
};

export type CommentWithUser = Comment & { user: User };
export type SingleArticle = Article & { comments: CommentWithUser[] };
