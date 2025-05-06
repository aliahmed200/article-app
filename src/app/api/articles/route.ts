import { NextRequest, NextResponse } from "next/server";
import { createArticleSchema } from "@/app/utils/validationSchhema";
import { createArticleDto } from "@/app/utils/dtos";
import { Article } from "@/generated/prisma";
import prisma from "@/app/utils/db";
import { ARTICLE_PER_PAGE } from "@/app/utils/constant";
import { verifyToken } from "@/app/utils/verifyToken";

/**
 * @method GET
 * @route  ~/api/articles
 * @desc   Get All Articles by page number
 * @access public
 */

export async function GET(request: NextRequest) {
  try {
    const pageNumber = request.nextUrl.searchParams.get("pageNumber") || "1";
    const articles = await prisma.article.findMany({
      skip: ARTICLE_PER_PAGE * (parseInt(pageNumber) - 1),
      take: ARTICLE_PER_PAGE,
    });
    return NextResponse.json(articles, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}

/**
 * @method Post
 * @route  ~/api/articles
 * @desc   Create All Articles
 * @access private (only admin can add article)
 */
export async function POST(request: NextRequest) {
  try {
    const user = verifyToken(request);
    if (user === null || user.isAdmin === false) {
      return NextResponse.json(
        { message: "only admin access denied" },
        {
          status: 403,
        }
      );
    }
    const body = (await request.json()) as createArticleDto;

    const validation = createArticleSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error.issues[0].message, {
        status: 400,
      });
    }

    const newArticle: Article = await prisma.article.create({
      data: {
        title: body.title,
        description: body.description,
      },
    });

    return NextResponse.json(newArticle, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
