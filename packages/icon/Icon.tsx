import classnames from "classnames";
import { Icons } from "@linvoice/icon/types";
export interface IconProps extends React.SVGAttributes<SVGElement> {
  name: Icons;
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
  iconColorClass = "text-primary-600 dark:text-primary-100",
  bgColorClass = "bg-primary-100 dark:bg-primary-600",
  ...props
}: IconProps): React.ReactElement {
  const symbolId = `#${prefix}-${name}`;

  if (rounded) {
    return (
      <div
        className={classnames(
          "p-3 rounded-full w-min h-[min-content]",
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
