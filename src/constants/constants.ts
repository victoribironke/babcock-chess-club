export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://babcock-chess-club.vercel.app";

export const THEME_KEY = "babcock-chess-club-theme";

export const PAGES = {
  home: "/",
};

export const CHESS_COM_PLAYERS = Array.from(
  new Set(
    [
      "boy_victor",
      "Cammizy",
      "danilawore",
      "BishopF807",
      "heisoseni",
      "planning_guy",
      "truthwithtemi",
      "AbbeyTk",
      "timidavidopeyemi",
      "tecnosam",
      "Cheta8",
      "cityboynati",
      "fex_og",
      "Ghostslayer4816",
      "Slipn_slide",
      "OlaDaClutcher",
      "Danny-1400",
      "Akogo",
      "Francis171",
      "dayomisi",
      "george160207",
      "lemuel_dynasty1",
    ].map((p) => p.toLowerCase().trim())
  )
);

export const LICHESS_PLAYERS = Array.from(
  new Set(
    [
      "boy_victor",
      "jidenna",
      "cityboynati",
      "Danny-1400",
      "simon25",
      "dayomisi",
      "Mozeez1",
      "heisoseni",
      "Posibright",
      "Cammizy",
      "Ozzychuks",
      "GhostSlayer4816",
      "knight66999",
      "Cheta8",
      "George1603",
      "Artonex_Ayz",
      "timidavidopeyemi",
      "truthwithtemi",
      "Activeeeee",
      "DannyLaw",
      "lemuel_dynasty",
    ].map((p) => p.toLowerCase().trim())
  )
);
