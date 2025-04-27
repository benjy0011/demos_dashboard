'use client';


import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Home() {
  const router = useRouter();
  console.log(router);

  return (
    <main>
      <Link href="/login">Login</Link> <br />

      <Link href="/about">About</Link> <br />

      <button onClick={() => router.push("/colors")}>Go To Colors</button>

    </main>
  )
}
