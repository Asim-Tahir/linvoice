import { forwardRef, Fragment } from "react";
import classNames from "classnames";
import { Disclosure, Transition } from "@headlessui/react";

import Icon from "@linvoice/icon";
import { ThemeContext } from "@linvoice/context";

export interface CollapsableTableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  row: React.ReactElement | Array<React.ReactElement>;
}

export default forwardRef<HTMLTableRowElement, CollapsableTableRowProps>(
  function CollapsableTableRow(
    { className, children, row, ...other }: CollapsableTableRowProps,
    ref
  ) {
    const {
      theme: { tableRow },
    } = useContext(ThemeContext);

    const baseStyle = tableRow.base;

    return (
      <Disclosure as={Fragment}>
        {({ open }) => (
          <>
            <Disclosure.Button
              as="tr"
              className={classNames(
                baseStyle,
                `py-2 relative cursor-pointer`,
                className
              )}
              ref={ref}
              {...other}
            >
              <td className="p-2">
                <Icon
                  name="dropdown"
                  className={`transition-all ${
                    open ? "transform rotate-180" : ""
                  } w-6 h-6`}
                />
              </td>
              {row}
            </Disclosure.Button>
            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform translate-y-2 opacity-0"
              enterTo="transform translate-y-0 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform translate-y-2 opacity-100"
              leaveTo="transform translate-y-0 opacity-0"
            >
              <Disclosure.Panel as="tr" className="w-full text-gray-200">
                {children}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    );
  }
);
