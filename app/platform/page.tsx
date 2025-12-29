export default function PlatformPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold text-center">Platform Overview</h1>
      <p className="text-center text-zinc-700 dark:text-zinc-300">
        Input → AI Modules → Output insights. We analyze brand performance, keywords, backlinks, and more.
      </p>
      <section className="space-y-4">
        <h2 className="font-bold text-2xl">Audit Pipeline</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Input: Brand website & SEO data</li>
          <li>AI Modules: 7 modules analyze your SEO performance</li>
          <li>Output: Recommendations & Insights</li>
        </ul>
      </section>
    </div>
  );
}
