import { Ratings } from "@/types/general";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChessCom from "./chess-com";
import { formatDateTime } from "@/lib/utils";

const Home = ({ data }: { data: Ratings }) => {
  const chessComStats = {
    rapid: data.ratings
      .map((r) => ({
        username: r.username,
        rating: r.ratings.find((a) => a.title === "Rapid")?.rating || 0,
      }))
      .sort((a, b) => (a.rating < b.rating ? 1 : -1)),
    bullet: data.ratings
      .map((r) => ({
        username: r.username,
        rating: r.ratings.find((a) => a.title === "Bullet")?.rating || 0,
      }))
      .sort((a, b) => (a.rating < b.rating ? 1 : -1)),
    blitz: data.ratings
      .map((r) => ({
        username: r.username,
        rating: r.ratings.find((a) => a.title === "Blitz")?.rating || 0,
      }))
      .sort((a, b) => (a.rating < b.rating ? 1 : -1)),
  };

  return (
    <section className="w-full max-w-5xl flex flex-col gap-8">
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
          <TabsTrigger value="lichess" disabled>
            Lichess
          </TabsTrigger>
        </TabsList>

        <p className="text-muted-foreground">
          Updated at: {formatDateTime(data.updatedAt)}
        </p>

        <TabsContent value="chesscom" className="w-full">
          <ChessCom stats={chessComStats} />
        </TabsContent>

        {/* <TabsContent value="lichess"></TabsContent> */}
      </Tabs>
    </section>
  );
};

export default Home;
