import "../styles/index.scss";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tarik Coffee Exporter",
  description:
    "Tarik Coffee exports the finest coffee beans globally, ensuring quality, sustainability, and a connection between farms and coffee lovers worldwide.",
  metadataBase: new URL("https://tarikcoffee.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta name="description" content="Tarik coffee exporter" />
        <link rel="icon" href="/logo.jpg" sizes="any" />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning={true} className="sc5">
        {children}
      </body>
    </html>
  );
}
