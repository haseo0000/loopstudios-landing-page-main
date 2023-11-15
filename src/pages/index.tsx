import Bottom from "@/components/bottom";
import Middle from "@/components/middle";
import Topic from "@/components/topic";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Topic />
      <Middle />
      <Bottom />
    </main>
  );
}
