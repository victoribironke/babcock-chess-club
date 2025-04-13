import { Ratings } from "@/types/general";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChessCom from "./chess-com";
import { formatDateTime } from "@/lib/utils";
import Lichess from "./lichess";

const Home = ({
  chesscom,
  lichess,
}: {
  chesscom: Ratings;
  lichess: Ratings;
}) => {
  const chessComStats = {
    rapid: chesscom.ratings
      .map((r) => ({
        username: r.username,
        rating: r.ratings.find((a) => a.title === "Rapid")?.rating || 0,
        played: r.ratings.find((a) => a.title === "Rapid")?.played || 0,
      }))
      .filter((p) => p.played >= 10)
      .sort((a, b) => (a.rating < b.rating ? 1 : -1)),
    bullet: chesscom.ratings
      .map((r) => ({
        username: r.username,
        rating: r.ratings.find((a) => a.title === "Bullet")?.rating || 0,
        played: r.ratings.find((a) => a.title === "Bullet")?.played || 0,
      }))
      .filter((p) => p.played >= 10)
      .sort((a, b) => (a.rating < b.rating ? 1 : -1)),
    blitz: chesscom.ratings
      .map((r) => ({
        username: r.username,
        rating: r.ratings.find((a) => a.title === "Blitz")?.rating || 0,
        played: r.ratings.find((a) => a.title === "Blitz")?.played || 0,
      }))
      .filter((p) => p.played >= 10)
      .sort((a, b) => (a.rating < b.rating ? 1 : -1)),
  };

  const lichessStats = {
    rapid: lichess.ratings
      .map((r) => ({
        username: r.username,
        rating: r.ratings.find((a) => a.title === "Rapid")?.rating || 0,
        played: r.ratings.find((a) => a.title === "Rapid")?.played || 0,
      }))
      .filter((p) => p.played >= 10)
      .sort((a, b) => (a.rating < b.rating ? 1 : -1)),
    bullet: lichess.ratings
      .map((r) => ({
        username: r.username,
        rating: r.ratings.find((a) => a.title === "Bullet")?.rating || 0,
        played: r.ratings.find((a) => a.title === "Bullet")?.played || 0,
      }))
      .filter((p) => p.played >= 10)
      .sort((a, b) => (a.rating < b.rating ? 1 : -1)),
    blitz: lichess.ratings
      .map((r) => ({
        username: r.username,
        rating: r.ratings.find((a) => a.title === "Blitz")?.rating || 0,
        played: r.ratings.find((a) => a.title === "Blitz")?.played || 0,
      }))
      .filter((p) => p.played >= 10)
      .sort((a, b) => (a.rating < b.rating ? 1 : -1)),
  };

  return (
    <section className="w-full max-w-7xl flex flex-col gap-8">
      <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl w-full text-center">
        Leaderboard
      </h1>

      <Tabs
        defaultValue="chesscom"
        className="w-full flex flex-col items-center justify-center gap-8"
      >
        <TabsList className="w-full max-w-md mx-auto grid grid-cols-2">
          <TabsTrigger value="chesscom" className="w-full">
            Chess.com
          </TabsTrigger>
          <TabsTrigger value="lichess">Lichess</TabsTrigger>
        </TabsList>

        <TabsContent value="chesscom" className="w-full">
          <p className="text-muted-foreground mb-8 w-full text-center">
            Updated at: {formatDateTime(chesscom.updatedAt)}
          </p>

          <ChessCom stats={chessComStats} />
        </TabsContent>

        <TabsContent value="lichess" className="w-full">
          <p className="text-muted-foreground mb-8 w-full text-center">
            Updated at: {formatDateTime(lichess.updatedAt)}
          </p>

          <Lichess stats={lichessStats} />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Home;
