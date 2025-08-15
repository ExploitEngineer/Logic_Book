import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/custom/theme-provider";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Programmer’s Logic Handbook",
  description:
    "Official Author Page of M Zain Ul Abideen — Author of 'Logic: Mastering Problem-Solving Skills for Coding Success'.",
  authors: [{ name: "M Zain Ul Abideen" }],
  alternates: {
    canonical: "https://logicbook.dpdns.org/author.html",
  },
  openGraph: {
    title: "M Zain Ul Abideen - Author of Logic",
    description:
      "Official Author Page of M Zain Ul Abideen — Author of 'Logic: Mastering Problem-Solving Skills for Coding Success'.",
    url: "https://logicbook.dpdns.org/author.html",
    siteName: "Logic Book",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/110760813?s=400&u=8a0ebc1ff8b8de53a5019dc3986671bd8fb73e94&v=4",
        width: 400,
        height: 400,
        alt: "M Zain Ul Abideen",
      },
    ],
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "M Zain Ul Abideen",
    url: "https://logicbook.dpdns.org/author.html",
    image:
      "https://avatars.githubusercontent.com/u/110760813?s=400&u=8a0ebc1ff8b8de53a5019dc3986671bd8fb73e94&v=4",
    sameAs: [
      "https://www.amazon.com/dp/B0FLPMBWWB",
      "https://www.barnesandnoble.com/w/logic-m-zain-ul-abideen/1148019588",
      "https://leanpub.com/Logic_Book",
      "https://zucreek55.gumroad.com/l/logic",
      "https://www.kobo.com/ww/en/ebook/logic-76",
      "https://books.apple.com/us/book/logic/id6749749456",
      "https://www.everand.com/book/898945796/Logic-Mastering-Problem-Solving-Skills-for-Coding-Success",
      "https://archive.org/details/logic-STANDARD",
      "https://bol.com/nl/nl/p/logic/9300000237820464/",
      "https://dev.to/zainulabdeenofficial/why-every-beginner-coder-should-read-logic-by-m-zain-ul-abideen-81g",
      "https://www.linkedin.com/in/YOUR-LINKEDIN",
      "https://github.com/ZainulabdeenOfficial/Logic_Book",
    ],
    jobTitle: "Author",
    worksFor: {
      "@type": "Organization",
      name: "Independent",
    },
    authorOf: {
      "@type": "Book",
      name: "Logic: Mastering Problem-Solving Skills for Coding Success",
      isbn: "6610000996735",
      bookFormat: "https://schema.org/EBook",
      url: "https://logicbook.dpdns.org/",
      sameAs: [
        "https://www.amazon.com/dp/B0FLPMBWWB",
        "https://leanpub.com/Logic_Book",
        "https://www.barnesandnoble.com/w/logic-m-zain-ul-abideen/1148019588",
        "https://www.kobo.com/ww/en/ebook/logic-76",
        "https://books.apple.com/us/book/logic/id6749749456",
        "https://archive.org/details/logic-STANDARD",
      ],
      publisher: {
        "@type": "Organization",
        name: "YOUR PUBLISHER NAME",
      },
      datePublished: "2025-08-04",
      inLanguage: "en",
    },
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld-global"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${montserrat.className} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          forcedTheme="dark"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
