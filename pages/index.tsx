import EntranceCardCompetition from "@/components/competition/EntranceCardCompetition";
import EntranceCardDeneme from "@/components/deneme/EntranceCardDeneme";
import EntranceCardGames from "@/components/games/EntranceCardGames";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="w-1/6 flex justify-start items-center mt-4 font-light">
        <div className="center w-[8%] mr-2">
          <hr className="w-16 border-t-2 border-black"/>
          <div className="square-btn-line"></div>
        </div>
        <p className="font-light text-lg">ANA SAYFA</p>
      </div>
      <div className="flex justify-center space-x-24 items-center mb-16">
        <EntranceCardCompetition />
        <EntranceCardDeneme />
        <EntranceCardGames />
      </div>
    </main>
  )
}
