export default function DashboardPage() {
  return (
    <div>

      <h1 className="text-2xl font-bold">Dashboard</h1>
      <h4   className="mb-4 text-gray-600">
             The Dashboard is the main overview page for the user. It provides a snapshot of brand health and AI visibility.

Key Components

Brand Selector

Dropdown to choose the brand you want to analyze.

Updates the entire dashboard with relevant data.

Snapshot Cards

AI Visibility Score: Measures how well AI systems (ChatGPT, Gemini, etc.) discover your brand.

Trust / EEAT Score: Evaluates Expertise, Authority, and Trustworthiness of the brand.

Non-Branded Keyword Coverage: Shows coverage of general keywords that your brand ranks for.

Last Audit Timestamp: Displays the most recent audit date.

Layout & UX

Cards are arranged in a grid for easy readability.

Each card highlights important metrics for quick understanding.

Designed to be data-dense but visually clear, with charts or mini-graphs optionally.
</h4>
    </div>

        
            
    
    
  );
}
