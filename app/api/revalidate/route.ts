import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
    revalidateTag("homepage");

    return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
}
