export async function GET() {
    const now = Date.now();

    if (now % 2 === 0) {
      return Response.json({ timestamp: now });
    }
  
    return Response.error();
}
