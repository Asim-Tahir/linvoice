export interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  prefix?: string;
  color?: string;
}

export default function Icon({
  name,
  prefix = "icon",
  color = "#333",
  ...props
}: IconProps): React.ReactElement {
  const symbolId = `#${prefix}-${name}`;

  return (
    <svg {...props} aria-hidden="true">
      <use href={symbolId} fill={color} />
    </svg>
  );
}
