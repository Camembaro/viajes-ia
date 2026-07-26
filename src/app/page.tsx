"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function preguntarIA() {
    if (!message.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await res.json();
      setReply(data.reply);
    } catch {
      setReply("Error al conectar con la IA.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-5xl font-bold text-cyan-400">
          ✈️ Viajes IA
        </h1>

        <p className="mt-3 text-gray-400">
          Tu asistente inteligente para planear viajes.
        </p>

        <div className="mt-8 rounded-xl bg-slate-900 p-6">

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-lg bg-slate-800 p-4"
            rows={5}
            placeholder="Ejemplo: Quiero viajar a Cancún 5 días con $12,000 MXN."
          />

          <button
            onClick={preguntarIA}
            className="mt-4 w-full rounded-xl bg-cyan-500 p-3 font-bold"
          >
            {loading ? "Consultando..." : "Preguntar a la IA"}
          </button>

        </div>

        {reply && (
          <div className="mt-8 rounded-xl bg-slate-900 p-6">
            <h2 className="mb-3 text-xl font-bold text-cyan-400">
              Respuesta
            </h2>

            <p className="whitespace-pre-wrap">
              {reply}
            </p>
          </div>
        )}

      </div>
    </main>
  );
}
