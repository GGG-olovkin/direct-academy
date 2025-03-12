import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Direct Academy | Language Learning Excellence",
  description: "Learn about Direct Academy's innovative approach to language teaching and our commitment to student success.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 