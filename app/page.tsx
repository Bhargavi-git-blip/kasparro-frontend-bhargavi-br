"use client";
import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [section, setSection] = useState<"home" | "platform" | "about" | "architecture">("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* NAVBAR */}
      <header className="bg-white shadow-md px-10 py-5 flex items-center">
        <h1 className="text-2xl font-bold text-indigo-600">
          Kasparro Dashboard
        </h1>

        <nav className="flex-1 flex justify-center gap-12 text-lg font-semibold">
          <button
            onClick={() => setSection("home")}
            className={`${section === "home" ? "text-blue-600 underline" : "text-blue-500"}`}
          >
            Home
          </button>
          <button
            onClick={() => setSection("platform")}
            className={`${section === "platform" ? "text-green-600 underline" : "text-green-500"}`}
          >
            Platform
          </button>
          <button
            onClick={() => setSection("about")}
            className={`${section === "about" ? "text-red-600 underline" : "text-red-500"}`}
          >
            About
          </button>
          <button
            onClick={() => setSection("architecture")}
            className={`${section === "architecture" ? "text-purple-600 underline" : "text-purple-500"}`}
          >
            Architecture
          </button>
        </nav>
      </header>

      {/* CONTENT */}
      <main className="p-10 space-y-20">
        {/* HOME */}
        {section === "home" && (
          <>
            <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 text-white rounded-3xl p-14 shadow-xl">
              <h2 className="text-5xl font-extrabold mb-6">
                AI-Native SEO for the <br /> AI-First Search Era
              </h2>
              <p className="text-lg max-w-3xl text-indigo-100">
                Kasparro helps brands understand how AI systems like ChatGPT, Gemini, and Perplexity discover, trust, and recommend them.
              </p>
              <button className="mt-8 bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
                Run AI-SEO Audit
              </button>
            </section>

            <section>
              <h3 className="text-3xl font-bold mb-8">Why AI-First SEO is Different</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-red-50 border border-red-200 p-6 rounded-2xl shadow">
                  <h4 className="text-red-600 font-bold mb-2">Traditional SEO</h4>
                  <p>Focuses on rankings, backlinks, and keyword positions.</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl shadow">
                  <h4 className="text-yellow-600 font-bold mb-2">AI Search</h4>
                  <p>AI models summarize, reason, and select trusted sources.</p>
                </div>
                <div className="bg-green-50 border border-green-200 p-6 rounded-2xl shadow">
                  <h4 className="text-green-600 font-bold mb-2">Kasparro</h4>
                  <p>Measures AI visibility, trust, and brand authority.</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-3xl font-bold mb-8">Core AI-SEO Modules</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  "SEO Intelligence",
                  "Content Quality",
                  "Trust & EEAT",
                  "Brand Mentions",
                  "Technical Signals",
                  "Competitor Context",
                  "AI Visibility",
                ].map((m) => (
                  <div
                    key={m}
                    className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition"
                  >
                    <h4 className="font-semibold text-lg">{m}</h4>
                    <p className="text-sm opacity-90 mt-2">AI-driven analysis & scoring</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* PLATFORM */}
        {section === "platform" && (
          <section className="space-y-10">
            <h2 className="text-4xl font-bold text-green-600">Platform Overview</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow">
                <h3 className="font-bold text-lg mb-2">Input</h3>
                <p>Brand data, content, web signals</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow">
                <h3 className="font-bold text-lg mb-2">AI Modules</h3>
                <p>7 intelligent audit systems</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow">
                <h3 className="font-bold text-lg mb-2">Output</h3>
                <p>Scores, insights & recommendations</p>
              </div>
            </div>
          </section>
        )}

        {/* ABOUT */}
        {section === "about" && (
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-red-600">About Kasparro</h2>
            <div className="bg-white p-8 rounded-2xl shadow space-y-4">
              <p>Kasparro is built by engineers focused on the future of AI-first search.</p>
              <p>Our mission is to help brands stay visible, trusted, and relevant in AI-driven discovery systems.</p>
              <p>We believe SEO must evolve from keywords to intelligence.</p>
            </div>
          </section>
        )}

        {/* ARCHITECTURE */}
        {section === "architecture" && (
          <section className="my-10 p-8 bg-gray-50 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Architecture</h2>
            <p className="mb-4 text-gray-600">
              Kasparro Frontend System Overview: Input → Audit Modules → Output

   User Input-(Brand, Content & Web Signals)
         |
  InputAssembler-(Organizes & validates data)
         |
   AI Modules-7 Audit Modules:SEO, Content,Trust, Brand,Technical, etc. 
         |
 Output Surfaces-(Scores, Insights & Recommendations)


            </p>
            <div className="flex justify-center">
              
            </div>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500">
        © 2025 Kasparro. All rights reserved.
      </footer>
    </div>
  );
}
