import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

const siteUrl = "https://ai-learning-tau-steel.vercel.app";
const siteName = "AI Engineering Mastery";
const siteDescription =
  "A beginner-friendly AI engineering curriculum for learning Transformers, large language models, RAG, AI agents, fine-tuning, model literacy, and production AI infrastructure from first principles.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "AI engineering",
    "learn AI",
    "machine learning engineering",
    "large language models",
    "LLM engineering",
    "Transformers",
    "Attention Is All You Need",
    "retrieval augmented generation",
    "RAG",
    "AI agents",
    "fine-tuning",
    "AI infrastructure",
    "model literacy",
    "prompt engineering",
  ],
  authors: [{ name: "Jiemin Benn" }],
  creator: "Jiemin Benn",
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteName,
    description: siteDescription,
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
