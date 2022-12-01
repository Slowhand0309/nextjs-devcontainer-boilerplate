'use client';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <div>layout header</div>
        <div>{children}</div>
      </body>
    </html>
  );
}
