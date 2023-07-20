import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthComponent() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <>
        Signed in as {session.user.email} {session.user.name} <br />
        <button onClick={() => signOut()}>Se déconnecter</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
