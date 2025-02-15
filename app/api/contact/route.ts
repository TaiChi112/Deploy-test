export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  return new Response(JSON.stringify({ message: `Contact with ID: ${id}` }));
}
