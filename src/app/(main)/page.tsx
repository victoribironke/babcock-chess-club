import Homepage from "@/components/main/home";
import { BASE_URL } from "@/constants/constants";
import { getPlayersRatings } from "@/lib/requests";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

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

const Home = async () => {
  const { data, error } = await getPlayersRatings();

  if (error) return <></>;

  return <Homepage data={data!} />;
};

export default Home;
