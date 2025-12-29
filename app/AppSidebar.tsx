import Link from "next/link";

export default function AppSidebar() {
  return (
    <aside className="w-60 border-r p-6">
      <nav className="flex flex-col gap-3 text-sm">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/audit">Audit</Link>
        <Link href="/architecture">Architecture</Link>
      </nav>
    </aside>
  );
}
