import { NextResponse } from "next/server";
import { getTodos } from "./data";

export async function GET() {
  const todos = getTodos();
  return NextResponse.json(todos);
}
