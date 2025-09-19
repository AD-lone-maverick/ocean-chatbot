import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([
    { role: "system", content: "Ask me anything about the Indian Ocean (Argo data powered)." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/chat`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: input })
        }
      );
      const data = await response.json();
      setMessages([...newMessages, { role: "assistant", content: data.answer }]);
    } catch (err) {
      setMessages([...newMessages, { role: "assistant", content: "⚠️ Error fetching response." }]);
    }
    setLoading(false);
  };

  return (
    <div className="bg-[#0B0B28] min-h-screen text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-2 flex items-center">
        🌊 Ocean Data Chatbot
      </h1>
      <div className="w-full max-w-2xl bg-[#1a1a40] rounded-2xl shadow-lg p-4 flex flex-col h-[70vh]">
        <div className="flex-1 overflow-y-auto space-y-2">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-2 rounded-lg ${
                msg.role === "user"
                  ? "bg-indigo-600 text-white self-end"
                  : "bg-gray-700 text-gray-100 self-start"
              }`}
            >
              {msg.content}
            </div>
          ))}
          {loading && <p className="text-gray-400">Thinking...</p>}
        </div>
        <div className="mt-3 flex">
          <input
            className="flex-1 p-2 rounded-l-lg bg-gray-800 text-white border border-gray-600"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Indian Ocean data..."
          />
          <button
            onClick={handleSend}
            className="px-4 bg-indigo-600 rounded-r-lg hover:bg-indigo-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
