import { useBrandStore } from "../../store/brandStore";

export default function BrandSelector() {
  const { brands, selectedBrand, setSelectedBrand } = useBrandStore();

  return (
    <div className="mb-4">
      <label className="mr-2 font-semibold">Select Brand:</label>
      <select
        value={selectedBrand?.id || ""}
        onChange={(e) =>
          setSelectedBrand(brands.find((b) => b.id === e.target.value)!)
        }
        className="border p-2 rounded bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50"
      >
        <option value="">-- Choose Brand --</option>
        {brands.map((b) => (
          <option key={b.id} value={b.id}>
            {b.name}
          </option>
        ))}
      </select>
    </div>
  );
}
