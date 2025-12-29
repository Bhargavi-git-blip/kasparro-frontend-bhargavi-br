"use client";
import Image from "next/image";

export default function Architecture() {
  return (
    <section className="my-10 p-8 bg-gray-50 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Architecture</h2>
      <p className="mb-4 text-gray-600">
        Kasparro Frontend System Overview:
      </p>

      <div className="flex justify-center">
        <h4   className="mb-4 text-gray-600">
              Kasparro Frontend System Overview: Input → Audit Modules → Output

   User Input-(Brand, Content & Web Signals)
         |
  InputAssembler-(Organizes & validates data)
         |
   AI Modules-7 Audit Modules:SEO, Content,Trust, Brand,Technical, etc. 
         |
 Output Surfaces-(Scores, Insights & Recommendations)
</h4>
            
      </div>
      <div className="flex justify-center">
        <h6
           className="mb-4 text-gray-600">
           Kasparro has 7 core audit modules that analyze different aspects of the brand:

SEO Intelligence – checks SEO signals

Content Quality – analyzes text and media quality

Trust & EEAT – evaluates credibility & authority

Brand Mentions – scans web mentions of the brand

Technical Signals – checks website performance and structure

Competitor Context – compares brand performance vs competitors

AI Visibility – measures how visible the brand is to AI systems   
</h6>
            
      </div>
    </section>
  );
}
