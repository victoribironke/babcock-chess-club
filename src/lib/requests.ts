import { db } from "@/services/firebase";
import { Ratings } from "@/types/general";
import { doc, getDoc } from "firebase/firestore";

export const getChesscomRatings = async (username: string) => {
  try {
    const req = await fetch(
      `https://api.chess.com/pub/player/${username}/stats`
    );
    const res = await req.json();

    return {
      data: {
        username,
        ratings: [
          {
            title: "Rapid",
            rating: res.chess_rapid?.last?.rating || 0,
            played:
              (res.chess_rapid?.record.win || 0) +
              (res.chess_rapid?.record.loss || 0) +
              (res.chess_rapid?.record.draw || 0),
          },
          {
            title: "Blitz",
            rating: res.chess_blitz?.last?.rating || 0,
            played:
              (res.chess_blitz?.record.win || 0) +
              (res.chess_blitz?.record.loss || 0) +
              (res.chess_blitz?.record.draw || 0),
          },
          {
            title: "Bullet",
            rating: res.chess_bullet?.last.rating || 0,
            played:
              (res.chess_bullet?.record.win || 0) +
              (res.chess_bullet?.record.loss || 0) +
              (res.chess_bullet?.record.draw || 0),
          },
        ],
      },
      error: null,
    };
  } catch (e) {
    return {
      data: {
        username,
        ratings: [
          { title: "Rapid", rating: 0, played: 0 },
          { title: "Blitz", rating: 0, played: 0 },
          { title: "Bullet", rating: 0, played: 0 },
        ],
      },
      error: e,
    };
  }
};

export const getLichessRatings = async (username: string) => {
  try {
    const req = await fetch(`https://lichess.org/api/user/${username}`);
    const res = await req.json();

    return {
      data: {
        username,
        ratings: [
          {
            title: "Rapid",
            rating: res.perfs.rapid?.rating || 0,
            played: res.perfs.rapid.games,
          },
          {
            title: "Blitz",
            rating: res.perfs.blitz?.rating || 0,
            played: res.perfs.blitz.games,
          },
          {
            title: "Bullet",
            rating: res.perfs.bullet?.rating || 0,
            played: res.perfs.bullet.games,
          },
        ],
      },
      error: null,
    };
  } catch (e) {
    return {
      data: {
        username,
        ratings: [
          { title: "Rapid", rating: 0, played: 0 },
          { title: "Blitz", rating: 0, played: 0 },
          { title: "Bullet", rating: 0, played: 0 },
        ],
      },
      error: e,
    };
  }
};

export const getPlayersRatings = async () => {
  try {
    const chessComData = (
      await getDoc(doc(db, "ratings", "chesscom"))
    ).data() as Ratings;

    const lichessData = (
      await getDoc(doc(db, "ratings", "lichess"))
    ).data() as Ratings;

    return {
      data: { chesscom: chessComData, lichess: lichessData },
      error: null,
    };
  } catch (e) {
    console.error(e);
    return { data: null, error: "A server error occured." };
  }
};
