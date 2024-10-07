import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin']
});

export const metadata = {
  title: "Markdown Lounge",
  description: "Markdown Cheatsheet and Playground",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jetBrainsMono.className}
      >
        {children}
      </body>
    </html>
  );
}
