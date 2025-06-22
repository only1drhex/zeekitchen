// pages/ssr-test.js
export async function getServerSideProps() {
  const timestamp = new Date().toISOString();

  return {
    props: {
      message: "This page was rendered on the server",
      timestamp,
    },
  };
}

export default function SSRTest({ message, timestamp }) {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>SSR Test</h1>
      <p>{message}</p>
      <p>Server Time: {timestamp}</p>
    </div>
  );
}