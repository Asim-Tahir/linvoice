import classnames from "classnames";
export interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  prefix?: string;
  color?: string;
  rounded?: boolean;
  iconColorClass?: string;
  bgColorClass?: string;
}

export default function Icon({
  name,
  prefix = "icon",
  color = "#333",
  rounded = false,
  iconColorClass = "text-purple-600 dark:text-purple-100",
  bgColorClass = "bg-purple-100 dark:bg-purple-600",
  ...props
}: IconProps): React.ReactElement {
  const symbolId = `#${prefix}-${name}`;

  if (rounded) {
    return (
      <div
        className={classnames(
          "p-3 rounded-full",
          iconColorClass,
          bgColorClass,
          props.className
        )}
      >
        <svg {...props} aria-hidden="true" className="w-5 h-5">
          <use href={symbolId} fill={color} />
        </svg>
      </div>
    );
  } else {
    return (
      <svg {...props} aria-hidden="true">
        <use href={symbolId} fill={color} />
      </svg>
    );
  }
}
