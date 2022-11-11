import ChatInput from "./components/ChatInput";
import MessageList from "./components/MessageList";

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen">
      <MessageList />
      <ChatInput />
    </main>
  );
}
