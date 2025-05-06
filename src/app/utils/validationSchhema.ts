import { z } from "zod";

export const createArticleSchema = z.object({
  title: z.string().min(2).max(200),
  description: z.string().min(10),
});

export const registerSchema = z.object({
  username: z.string().min(2).max(200),
  email: z.string().min(3).max(200).email(),
  password: z.string().min(6),
});

export const loginSchema = z.object({
  email: z.string().min(3).max(200).email(),
  password: z.string().min(6),
});

export const updateUserSchema = z.object({
  email: z.string().min(3).max(200).email().optional(),
  password: z.string().min(6).optional(),
  username: z.string().min(2).max(200).optional(),
});

export const createCommentSchema = z.object({
  text: z.string().min(2).max(500),
  articleId: z.number(),
});
