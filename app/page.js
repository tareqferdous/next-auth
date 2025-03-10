import { auth } from "@/auth";
import Image from "next/image";
import Signin from "./components/Signin";
import SignOut from "./components/SignOut";

export default async function Home() {
  const session = await auth();

  return (
    <div className="p-10">
      {session?.user ? (
        <div className="flex gap-4">
          <p>{session.user.name}</p>
          <Image
            src={session?.user.image}
            alt={session.user.name}
            width={30}
            height={30}
            className="rounded-full"
          />
          <SignOut />
        </div>
      ) : (
        <Signin />
      )}
    </div>
  );
}
