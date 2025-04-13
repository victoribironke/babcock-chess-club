export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://babcock-chess-club.vercel.app";

export const THEME_KEY = "babcock-chess-club-theme";

export const PAGES = {
  home: "/",
};

export const CHESS_COM_PLAYERS = Array.from(
  new Set(["boy_victor"].map((p) => p.toLowerCase().trim()))
);
