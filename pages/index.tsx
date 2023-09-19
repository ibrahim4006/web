import PageTag from "@/components/common/PageTag";
import EntranceCardCompetition from "@/components/competition/EntranceCardCompetition";
import EntranceCardDeneme from "@/components/deneme/EntranceCardDeneme";
import EntranceCardGames from "@/components/games/EntranceCardGames";

export default function Home() {
  return (
    <main className=" h-screen ">
      <div className="flex justify-center lg:space-x-12 xl:space-x-24 items-center h-full flex-col lg:flex-row">
        <EntranceCardDeneme />
        <EntranceCardCompetition />
        <EntranceCardGames />
      </div>
    </main>
  );
}
