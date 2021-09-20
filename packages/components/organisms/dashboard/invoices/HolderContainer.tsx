import { SectionTitle } from "@linvoice/components/styled";

export interface HolderBaseProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
}

export default function HolderBase({
  title,
  children,
}: HolderBaseProps): React.ReactElement {
  return (
    <section className="w-full space-y-2">
      <SectionTitle>{title}</SectionTitle>
      {children}
    </section>
  );
}
