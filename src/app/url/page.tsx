// This file uses SSR by default since it's in the App Router and not marked "use client"

export default function SSRTestPage() {
  const timestamp = new Date().toISOString();

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>SSR Test</h1>
      <p>This page was rendered on the server.</p>
      <p>Timestamp: {timestamp}</p>
    </div>
  );
}
