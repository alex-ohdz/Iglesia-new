import Nav from "@/components/Nav";
import HistorySection from "@/components/HistorySection";
import MembersSection from "@/components/MembersSection";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <HistorySection />
        <MembersSection />
        <NewsSection />
      </main>
    </div>
  );
}
