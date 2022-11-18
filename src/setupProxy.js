import { createProxyMiddleware } from 'http-proxy-middleware';

// eslint-disable-next-line import/no-anonymous-default-export
export default function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
          target: 'http://localhost:8085', // 비지니스 서버 URL 설정
          changeOrigin: true,
        })
      );
}