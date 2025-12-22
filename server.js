import "dotenv/config";
import { createServer } from "vite";

const blogHost = process.env.BLOG_HOST;
if (!blogHost) {
  throw new Error("環境変数BLOG_HOSTにブログのドメイン名を指定してください");
}

const server = await createServer({
  server: {
    cors: {
      origin: `https://${blogHost}`,
    },
  },
  plugins: [
    {
      name: "configure-server",
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader("access-control-allow-private-network", "true");
          next();
        });
      },
    },
  ],
});

await server.listen();

console.log(`\nCORS設定: https://${blogHost}/`);
