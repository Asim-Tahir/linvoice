// TODO: convert this to twin.micro

export interface PageTitleProps {
  children: React.ReactElement | string;
}

export default function PageTitle({
  children,
}: PageTitleProps): React.ReactElement {
  return (
    <h1 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      {children}
    </h1>
  );
}
