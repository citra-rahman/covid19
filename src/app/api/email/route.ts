import { NextRequest, NextResponse } from "next/server";
import { Database, OPEN_CREATE, OPEN_READWRITE } from "sqlite3";
import { UserSchema } from "@/db/schema";
import { User } from "@/lib/types";

export async function POST(request: NextRequest) {
  const { email } = await request.json();
  const user = email as Omit<User, "timestamp">;

  const db = new Database("./src/db/user.db", OPEN_READWRITE | OPEN_CREATE, (err) =>
    console.error(err)
  );

  await db.exec(UserSchema);

  const insertSql = `INSERT INTO users (email) VALUES (?)`;
  const res = await db.run(insertSql, user.email);

  return NextResponse.json(res);
}
