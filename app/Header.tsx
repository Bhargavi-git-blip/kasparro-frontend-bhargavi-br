"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b px-8 py-4 flex items-center gap-6">
      <Link href="/" className="font-semibold text-lg">
        Kasparro
      </Link>

      <nav className="flex gap-4 text-sm text-gray-600">
        <Link href="/platform">Platform</Link>
        <Link href="/about">About</Link>
        <Link href="/app/dashboard">App</Link>
      </nav>
    </header>
  )
}
