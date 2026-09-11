import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();
    // TODO: Replace mockChat() with RAG API call: POST /api/chat { query, history, embeddings }
    // TODO: Connect to vector DB (Pinecone/Supabase)
    // TODO: Add streaming response
    
    // Mock response for now
    const mockReply = "This is a mock response from the VNEX AI chatbot. RAG integration pending.";
    
    return new Response(JSON.stringify({ reply: mockReply }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error in chat API:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}