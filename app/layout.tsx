import { Providers } from './provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
