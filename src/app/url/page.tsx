

export default function SSRTest({ message, timestamp }) {

   const timestamp = new Date().toISOString();

  const obj = {
    props: {
      message: "This page was rendered on the server",
      timestamp,
    },
  };
}
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>SSR Test</h1>
      <p>{obj.props.message}</p>
      <p>Server Time: {obj.props.timestamp}</p>
    </div>
  );
}
