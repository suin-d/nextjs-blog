export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
// getStaticProps나 getStaticPaths에서 API 경로를 가져오지 말 것
// getStaticProps나 getStaticPaths에서는 API Route를 가져오지 않아야 한다.
// 대신 그 안에서 직접 server-side 코드를 작성해야 한다(or call a helper function).
