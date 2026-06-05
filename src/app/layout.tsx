import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Astra AI Academy",
  description:
    "A professional AI learning website that teaches Transformers, RAG, agents, fine-tuning, AI infrastructure, and model literacy from first principles.",
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
