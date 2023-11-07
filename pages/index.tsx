import MissionWrapper from "@/components/common/MissionWrapper";
import PageTag from "@/components/common/PageTag";
import EntranceCardCompetition from "@/components/competition/EntranceCardCompetition";
import EntranceCardDeneme from "@/components/deneme/EntranceCardDeneme";
import EntranceCardGames from "@/components/games/EntranceCardGames";
import OyunSonu from "@/components/games/OyunSonu";

export default function Home() {
  return (
    <main className=" h-[950px] ">
      <OyunSonu/>
      <div className="flex justify-center lg:space-x-12 xl:space-x-24 items-center h-full flex-col lg:flex-row">
        <EntranceCardDeneme />
        <EntranceCardCompetition />
        <EntranceCardGames />
      </div>
    </main>
  );
}
