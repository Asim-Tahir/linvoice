import { useContext, forwardRef } from "react";
import classNames from "classnames";
import { ThemeContext } from "@linvoice/context";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The type of the badge
   */
  type?:
    | "pending"
    | "paid"
    | "outstanding"
    | "late"
    | "success"
    | "danger"
    | "warning"
    | "neutral"
    | "primary";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { className, children, type, ...other }: BadgeProps = { type: "pending" },
  ref
) {
  const {
    theme: { badge },
  } = useContext(ThemeContext);

  const baseStyle = badge.base;
  const typeStyle = {
    success: badge.success,
    danger: badge.danger,
    warning: badge.warning,
    neutral: badge.neutral,
    primary: badge.primary,

    paid: badge.success,
    pending: badge.neutral,
    outstanding: badge.warning,
    late: badge.danger,
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const cls = classNames(baseStyle, typeStyle[type], className);

  return (
    <span className={cls} ref={ref} {...other}>
      {children}
    </span>
  );
});

export default Badge;
