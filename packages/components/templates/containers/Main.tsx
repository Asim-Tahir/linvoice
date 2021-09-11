export interface MainProps {
  children: React.ReactElement | string;
}

export default function Main({ children }: MainProps): React.ReactElement {
  return (
    <main className="h-full overflow-y-auto">
      <div className="container grid px-6 mx-auto">{children}</div>
    </main>
  );
}
