interface Props {
  title: string;
  value: string | number;
}

export default function SnapshotCard({ title, value }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
