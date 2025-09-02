import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://fluffycravingss.vercel.app/"),
  title: {
    default: "Fluffy Cravingss",
    template: "%s | Fluffy Cravingss",
  },
  description: "Fresh, handmade cakes and bakery items delivered in Khalilabad.",
  openGraph: {
    title: "Fluffy Cravingss",
    description: "Fresh, handmade cakes and bakery items delivered in Khalilabad.",
    url: "/",
    siteName: "Fluffy Cravingss",
    images: [
      { url: "/https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FKhalilabad%2C_India&psig=AOvVaw3qK9iicG7Gvo5Qyvu4dYSz&ust=1756875172943000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIjL85akuY8DFQAAAAAdAAAAABAE", width: 1200, height: 630, alt: "Fluffy Cravingss" }
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster
 position="top-center"
  reverseOrder={false}
/>
        {children}
      </body>
    </html>
  );
}
