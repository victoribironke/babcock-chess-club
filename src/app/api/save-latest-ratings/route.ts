import { CHESS_COM_PLAYERS, LICHESS_PLAYERS } from "@/constants/constants";
import { getChesscomRatings, getLichessRatings } from "@/lib/requests";
import { auth, db } from "@/services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export const GET = async () => {
  const email = process.env.API_EMAIL!;
  const password = process.env.API_PASSWORD!;

  try {
    // Get stats from chess.com
    const chessComData = await Promise.all(
      CHESS_COM_PLAYERS.map((p) => getChesscomRatings(p))
    );

    const lichessData = await Promise.all(
      LICHESS_PLAYERS.map((p) => getLichessRatings(p))
    );

    await signInWithEmailAndPassword(auth, email, password);

    const updatedAt = new Date().toISOString();

    await setDoc(doc(db, "ratings", "chesscom"), {
      ratings: chessComData.map((d) => d.data),
      updatedAt,
    });

    await setDoc(doc(db, "ratings", "lichess"), {
      ratings: lichessData.map((d) => d.data),
      updatedAt,
    });

    return NextResponse.json({
      data: "success",
    });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
};
