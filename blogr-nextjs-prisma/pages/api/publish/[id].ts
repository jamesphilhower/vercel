import prisma from '../../../lib/prisma';

// PUT /api/publish/:id
export default async function handle(req, res) {
  const postId = req.query.id;
  const post = await prisma.post.update({
    where: { id: postId },
    data: { published: true },
  });
  res.json(post);
}

// GET /api/auth/session HTTP/1.1
// Accept: */*
// Accept-Encoding: gzip, deflate, br
// Accept-Language: en-US,en;q=0.9
// Cache-Control: no-cache
// Connection: keep-alive
// Content-Type: application/json
// Cookie: next-auth.csrf-token=0928893590c2ebd834c148aaaf099b15cc4fb37ba7bdddee90fa56b08e1a6416%7C90a1c02ed57709eff8b5504a03235322f5b69c6f0c16e4ba2ba512b4d1f5d2f8; next-auth.callback-url=http%3A%2F%2Flocalhost%3A3000%2F; next-auth.session-token=33962c2b-78dd-4d4a-a729-f00aa9d1d686
// Host: localhost:3000
// Pragma: no-cache
// Referer: http://localhost:3000/create
// Sec-Fetch-Dest: empty
// Sec-Fetch-Mode: cors
// Sec-Fetch-Site: same-origin
// User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36
// sec-ch-ua: "Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"
// sec-ch-ua-mobile: ?0
// sec-ch-ua-platform: "macOS"


// POST /api/post HTTP/1.1
// Accept: */*
// Accept-Encoding: gzip, deflate, br
// Accept-Language: en-US,en;q=0.9
// Cache-Control: no-cache
// Connection: keep-alive
// Content-Length: 39
// Content-Type: application/json
// Cookie: next-auth.csrf-token=0928893590c2ebd834c148aaaf099b15cc4fb37ba7bdddee90fa56b08e1a6416%7C90a1c02ed57709eff8b5504a03235322f5b69c6f0c16e4ba2ba512b4d1f5d2f8; next-auth.callback-url=http%3A%2F%2Flocalhost%3A3000%2F; next-auth.session-token=33962c2b-78dd-4d4a-a729-f00aa9d1d686
// Host: localhost:3000
// Origin: http://localhost:3000
// Pragma: no-cache
// Referer: http://localhost:3000/create
// Sec-Fetch-Dest: empty
// Sec-Fetch-Mode: cors
// Sec-Fetch-Site: same-origin
// User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36
// sec-ch-ua: "Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"
// sec-ch-ua-mobile: ?0
// sec-ch-ua-platform: "macOS"