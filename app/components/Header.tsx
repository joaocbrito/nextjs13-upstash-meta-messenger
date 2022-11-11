import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function Header() {
  const session = false;

  if (session)
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2">
          <Image
            className="rounded-full mx-2 object-contain"
            src="https://avatars.githubusercontent.com/u/18395825?v=4"
            width={50}
            height={50}
            alt="Profile Picture"
          />

          <div>
            <p className="text-blue-400">Logged in as:</p>
            <p className="font-bold text-lg">Joao Brito</p>
          </div>
        </div>

        <LogoutButton />
      </header>
    );

  return (
    <header
      className="sticky top-0 z-50 bg-white flex justify-center tiemce
     p-10 shadow-sm"
    >
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <Image
            src="https://links.papareact.com/jne"
            width={50}
            height={10}
            alt="Logo"
          />

          <p className="text-blue-400">Welcome to Meta Messenger</p>
        </div>

        <Link
          href="/auth/signin"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}
