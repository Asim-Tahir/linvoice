// TODO: convert this to twin.micro

export interface SectionTitleProps {
  children: React.ReactElement | string;
}

export default function SectionTitle({
  children,
}: SectionTitleProps): React.ReactElement {
  return (
    <h2 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
      {children}
    </h2>
  );
}
