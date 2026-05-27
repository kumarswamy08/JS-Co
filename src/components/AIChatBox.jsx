import { useState } from "react";

import {
  Send,
  Sparkles,
  Bot,
  User,
} from "lucide-react";

function AIChatBox() {

  const [message, setMessage] = useState("");

  const [chat, setChat] = useState([

    {
      type: "ai",
      text: "Hello 👋 I’m your AI Marketing Assistant. Ask me anything about campaign optimization, engagement, ROI, hashtags, or audience targeting.",
    },

  ]);

  const quickPrompts = [

    "How to improve engagement?",

    "Best posting time?",

    "How to increase leads?",

    "Improve ad performance",

  ];

  const handleSend = () => {

    if (!message.trim()) return;

    const userMessage = {

      type: "user",
      text: message,
    };

    const aiMessage = {

      type: "ai",
      text:
        "AI Recommendation: Focus on short-form video content, optimize CTA placement, and post during peak audience hours (7 PM - 9 PM) for better engagement and conversions.",
    };

    setChat((prev) => [

      ...prev,
      userMessage,
      aiMessage,

    ]);

    setMessage("");
  };

  return (

    <div className="bg-white rounded-3xl border shadow-sm min-h-[700px] flex flex-col overflow-hidden">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-6 flex items-center gap-4">

        <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">

          <Sparkles size={28} />

        </div>

        <div>

          <h1 className="text-2xl font-bold">

            AI Marketing Assistant

          </h1>

          <p className="text-white/80">

            Smart campaign recommendations

          </p>

        </div>

      </div>

      {/* QUICK PROMPTS */}
      <div className="p-5 border-b flex flex-wrap gap-3">

        {quickPrompts.map((prompt, index) => (

          <button
            key={index}
            onClick={() => setMessage(prompt)}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition"
          >

            {prompt}

          </button>

        ))}

      </div>

      {/* CHAT AREA */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#F8FAFC] max-h-[450px]">

        {chat.map((item, index) => (

          <div
            key={index}
            className={`flex ${
              item.type === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            <div
              className={`max-w-[85%] rounded-3xl p-5 flex gap-4 ${
                item.type === "user"
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-700 text-white"
                  : "bg-white border"
              }`}
            >

              {/* ICON */}
              <div className="mt-1">

                {item.type === "user" ? (

                  <User size={22} />

                ) : (

                  <Bot
                    size={22}
                    className="text-purple-600"
                  />

                )}

              </div>

              {/* MESSAGE */}
              <p className="leading-8 text-[15px]">

                {item.text}

              </p>

            </div>

          </div>

        ))}

      </div>

      {/* INPUT */}
      <div className="p-5 border-t bg-white mt-auto">

        <div className="flex items-center gap-4">

          <input
            type="text"
            placeholder="Ask AI about campaign optimization..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 border rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
          />

          <button
            onClick={handleSend}
            className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-4 rounded-2xl hover:scale-[1.02] transition"
          >

            <Send size={22} />

          </button>

        </div>

      </div>

    </div>
  );
}

export default AIChatBox;