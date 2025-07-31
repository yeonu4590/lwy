import ping from 'ping';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await ping.promise.probe('smp.lyw.kr');
    return NextResponse.json({ alive: res.alive, time: Math.round(res.time) });
  } catch (e) {
    return NextResponse.json({ alive: false, time: null }, { status: 500 });
  }
}