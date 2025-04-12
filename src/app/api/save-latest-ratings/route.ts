import { PLAYERS } from "@/constants/constants";
import { getChesscomRatings } from "@/lib/requests";
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
      PLAYERS.map((p) => getChesscomRatings(p))
    );

    await signInWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, "ratings", "chesscom"), {
      ratings: chessComData.map((d) => d.data),
      updatedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      data: "success",
    });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
};
