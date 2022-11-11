"use client";

import { ChangeEvent, FormEvent, useState } from "react";

export default function ChatInput() {
  const [input, setInput] = useState("");

  function handleAddMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!input) return;

    const messageToSend = input;
  }

  return (
    <form
      onSubmit={handleAddMessage}
      className="fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 
      border-t border-gray-100"
    >
      <input
        type="text"
        placeholder="Enter message here..."
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setInput(event.target.value)
        }
        value={input}
        className="flex-1 text-black px-5 py-3 rounded border border-gray-300 
        focus:outline-none focus:ring-2 focus:ring-blue-600 
        focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
      />

      <button
        type="submit"
        disabled={!input}
        className="bg-blue-500 not:disabled:hover:bg-blue-700 text-white font-bold 
        py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
}
