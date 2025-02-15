"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from 'react'

export default function page() {
  const { data: session } = useSession();

    return (
        <div>
            {session ? (
                <div>
                    <p>Welcome, {session?.user?.name}</p>
                    <button onClick={() => signOut()}>Sign Out</button>
                </div>
            ) : (
                <>
                    <button onClick={() => signIn("google")}>Sign In with Google</button>
                    <button onClick={() => signIn("github")}>Sign In with GitHub</button>
                    <button onClick={() => signIn("discord")}>Sign In with Discord</button>
                </>
            )}
        </div>
    )
}
