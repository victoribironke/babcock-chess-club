export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://babcock-chess-club.vercel.app";

export const THEME_KEY = "babcock-chess-club-theme";

export const PAGES = {
  home: "/",
};

export const PLAYERS = ["boy_victor"];
