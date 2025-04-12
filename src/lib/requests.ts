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
          { title: "Rapid", rating: res.chess_rapid?.last?.rating || 0 },
          { title: "Blitz", rating: res.chess_blitz?.last?.rating || 0 },
          { title: "Bullet", rating: res.chess_bullet?.last.rating || 0 },
        ],
      },
      error: null,
    };
  } catch (e) {
    return {
      data: {
        username,
        ratings: [
          { title: "Rapid", rating: 0 },
          { title: "Blitz", rating: 0 },
          { title: "Bullet", rating: 0 },
        ],
      },
      error: e,
    };
  }
};
