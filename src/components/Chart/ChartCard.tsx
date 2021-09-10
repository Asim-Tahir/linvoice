export interface ChartProps {
  title: string;
  children: Array<React.ReactElement> | React.ReactElement | string;
}

export default function Chart({
  children,
  title,
}: ChartProps): React.ReactElement {
  return (
    <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
      <p className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
        {title}
      </p>
      {children}
    </div>
  );
}
