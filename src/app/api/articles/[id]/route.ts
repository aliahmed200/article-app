import { updateArticleDto } from "@/app/utils/dtos";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/utils/db";
import { verifyToken } from "@/app/utils/verifyToken";

/**
 * @method GET
 * @route  ~/api/articles/:id
 * @desc   Get specific Article by id
 * @access public
 */

interface Props {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
      include: {
        comments: {
          include: { user: { select: { username: true } } },
          orderBy: { createdAt: "desc" },
        },
      },
    });
    if (!article) {
      return NextResponse.json("article not found", { status: 404 });
    }
    return NextResponse.json(article, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}

/**
 * @method PUT
 * @route  ~/api/articles/:id
 * @desc   Update Articlegit 
 * @access public
 */

export async function PUT(request: NextRequest, { params }: Props) {
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

    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!article) {
      return NextResponse.json("article not found", { status: 404 });
    }

    const body = (await request.json()) as updateArticleDto;
    const updatedArticle = await prisma.article.update({
      where: { id: parseInt(params.id) },
      data: {
        title: body.title,
        description: body.description,
      },
    });

    console.log(body);
    return NextResponse.json(updatedArticle, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}

/**
 * @method DELETE
 * @route  ~/api/articles/:id
 * @desc   Delete Article
 * @access public
 */

export async function DELETE(request: NextRequest, { params }: Props) {
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
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
      include: { comments: true },
    });

    if (!article) {
      return NextResponse.json("article not found", { status: 404 });
    }
    await prisma.article.delete({
      where: { id: parseInt(params.id) },
    });

    // delete the comment that beloong to this article
    const commentIds: number[] = article?.comments.map((comment) => comment.id);

    await prisma.comment.deleteMany({
      where: { id: { in: commentIds } },
    });

    return NextResponse.json({ messge: "article Deleted" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
