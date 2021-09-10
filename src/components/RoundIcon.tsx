import classNames from "classnames";

import { Icon } from "@/components";

export interface RoundIconProps {
  icon: string;
  iconColorClass: string;
  bgColorClass: string;
  className: string;
}

export default function RoundIcon({
  icon,
  iconColorClass = "text-purple-600 dark:text-purple-100",
  bgColorClass = "bg-purple-100 dark:bg-purple-600",
  className,
}: RoundIconProps): React.ReactElement {
  const baseStyle = "p-3 rounded-full";

  const cls = classNames(baseStyle, iconColorClass, bgColorClass, className);
  return (
    <div className={cls}>
      <Icon name={icon} className="w-5 h-5" />
    </div>
  );
}
