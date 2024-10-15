import AnimeQuotesGrid from "@/components/Home/animeQuotes";
import { Banner } from "@/components/Home/Banner";
import BigBangQuotesGrid from "@/components/Home/bigBangQuotes";
import QuotesGrid from "@/components/Home/QuotesGrid";

export default function Home() {
  return (
    <>
      <Banner />
      <QuotesGrid />
      <AnimeQuotesGrid />
      <BigBangQuotesGrid />
    </>
  );
}
