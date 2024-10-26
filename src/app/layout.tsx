// import { Rubik, Rajdhani } from 'next/font/google'
import "../styles/index.scss"


// const body = Rubik({
//   weight: ['300', '400', '500', '600', '700', '800', '900'],
//   subsets: ['latin'],
//   variable: '--body-font',
// });

// const heading = Rajdhani({
//   weight: ['300', '400', '500', '600', '700'],
//   subsets: ['latin'],
//   variable: '--heading-font',
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isDev = process.env.NODE_ENV === 'development'

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta name="description" content="Iitechie - IT Solutions and Services React Next js Template" />
        <link rel="icon" href="/favicon.webp" sizes="any" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rajdhani:400,500,600,700|Poppins:400,500,600,700|Rubik:400,500,600,700|family=Inter:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap" />
      </head>
      <body suppressHydrationWarning={true} className="sc5">
        {/* <body suppressHydrationWarning={true} className={`sc5 ${body.variable} ${heading.variable}`}> */}
        {children}
      </body>
    </html>
  )
}
