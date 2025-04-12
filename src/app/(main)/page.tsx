import Homepage from "@/components/main/home";
import { BASE_URL } from "@/constants/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Babcock Chess Club",
  description: "Leaderboard of the players in the Babcock Chess Club.",
  openGraph: {
    title: "Babcock Chess Club",
    description: "Leaderboard of the players in the Babcock Chess Club.",
    type: "website",
    url: BASE_URL,
    images: [
      {
        url: "",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Babcock Chess Club",
    description: "Leaderboard of the players in the Babcock Chess Club.",

    images: [
      {
        url: "",
      },
    ],
  },
};

const Home = () => {
  return <Homepage />;
};

export default Home;
