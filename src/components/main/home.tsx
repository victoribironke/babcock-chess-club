import { FullStats, Ratings } from "@/types/general";
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
  const chessComStats: FullStats = {
    rapid: [],
    bullet: [],
    blitz: [],
  };

  const lichessStats: FullStats = {
    rapid: [],
    bullet: [],
    blitz: [],
  };

  for (let i = 0; i < chesscom.ratings.length; i++) {
    const player_stats = chesscom.ratings[i];

    chessComStats.rapid.push({
      username: player_stats.username,
      rating:
        player_stats.ratings.find((a) => a.title === "Rapid")?.rating || 0,
      played:
        player_stats.ratings.find((a) => a.title === "Rapid")?.played || 0,
    });

    chessComStats.bullet.push({
      username: player_stats.username,
      rating:
        player_stats.ratings.find((a) => a.title === "Bullet")?.rating || 0,
      played:
        player_stats.ratings.find((a) => a.title === "Bullet")?.played || 0,
    });

    chessComStats.blitz.push({
      username: player_stats.username,
      rating:
        player_stats.ratings.find((a) => a.title === "Blitz")?.rating || 0,
      played:
        player_stats.ratings.find((a) => a.title === "Blitz")?.played || 0,
    });
  }

  for (let i = 0; i < lichess.ratings.length; i++) {
    const player_stats = lichess.ratings[i];

    lichessStats.rapid.push({
      username: player_stats.username,
      rating:
        player_stats.ratings.find((a) => a.title === "Rapid")?.rating || 0,
      played:
        player_stats.ratings.find((a) => a.title === "Rapid")?.played || 0,
    });

    lichessStats.bullet.push({
      username: player_stats.username,
      rating:
        player_stats.ratings.find((a) => a.title === "Bullet")?.rating || 0,
      played:
        player_stats.ratings.find((a) => a.title === "Bullet")?.played || 0,
    });

    lichessStats.blitz.push({
      username: player_stats.username,
      rating:
        player_stats.ratings.find((a) => a.title === "Blitz")?.rating || 0,
      played:
        player_stats.ratings.find((a) => a.title === "Blitz")?.played || 0,
    });
  }

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
