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
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700|Rubik:400,500,600,700|family=Inter:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap"
        />
      </head>
      <body suppressHydrationWarning={true} className="sc5">
        {children}
      </body>
    </html>
  );
}
