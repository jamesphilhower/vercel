import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next/types';
import { getServerSession } from "next-auth/next";
import { options } from '../auth/[...nextauth]';

// POST /api/posts
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req:NextApiRequest, res:NextApiResponse) {
  const { title, content } = req.body;
  const session = await getServerSession(req, res, options);

  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: { connect: { email: session?.user?.email } },
    },
  });
  res.json(result);
}