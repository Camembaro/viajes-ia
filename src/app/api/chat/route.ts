import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await client.responses.create({
      model: "openai/gpt-4.1-mini",
      max_output_tokens: 1000,
      input: `Eres un experto en viajes. Responde de forma útil y breve.

Usuario: ${message}`,
    });

    return Response.json({
      reply: response.output_text,
    });
  } catch (error: any) {
    console.error("ERROR COMPLETO:", error);

    return Response.json(
      {
        reply: error?.message || "Error desconocido",
      },
      { status: 500 }
    );
  }
}
