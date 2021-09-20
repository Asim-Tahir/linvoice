import { InfoCard } from "@linvoice/components";
import Icon from "@linvoice/icon";
import { Icons } from "@linvoice/icon/types";

import { useAppSelector } from "@linvoice/hooks";
import { invoicesStore, servicesStore } from "@linvoice/store";

export type Data = Array<{
  title: string;
  value: string;
  icon: {
    name: Icons;
    iconColorClass: string;
    bgColorClass: string;
  };
}>;

export default function DashboardCards(): React.ReactElement {
  const invoices = useAppSelector((state) =>
    invoicesStore.selectors.selectAll(state)
  );
  const totalPaymentRecieved = useAppSelector((state) =>
    servicesStore.selectors.selectSubTotalPrice(state)
  );
  const outstandingInvoices = useAppSelector(
    invoicesStore.selectors.selectInvoicesByStatus("outstanding")
  );
  const lateInvoices = useAppSelector(
    invoicesStore.selectors.selectInvoicesByStatus("late")
  );

  const datas: Data = [
    {
      title: "Total Invoices",
      value: `${invoices.length}`,
      icon: {
        name: "people",
        iconColorClass: "text-orange-500 dark:text-orange-100",
        bgColorClass: "bg-orange-100 dark:bg-orange-500",
      },
    },
    {
      title: "Total Payment to be Received",
      value: `$${totalPaymentRecieved.toFixed(2)}`,
      icon: {
        name: "money",
        iconColorClass: "text-green-500 dark:text-green-100",
        bgColorClass: "bg-green-100 dark:bg-green-500",
      },
    },
    {
      title: "Outstanding Invoices",
      value: `${outstandingInvoices.length}`,
      icon: {
        name: "cart",
        iconColorClass: "text-orange-700 bg-orange-100",
        bgColorClass: "dark:text-white dark:bg-orange-600",
      },
    },
    {
      title: "Late Invoices",
      value: `${lateInvoices.length}`,
      icon: {
        name: "chat",
        iconColorClass: "text-red-500 dark:text-red-100",
        bgColorClass: "bg-red-100 dark:bg-red-500",
      },
    },
  ];

  return (
    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
      {datas.map((data, i) => (
        <InfoCard key={i} title={data.title} value={data.value}>
          <Icon
            name={data.icon.name}
            rounded
            iconColorClass={data.icon.iconColorClass}
            bgColorClass={data.icon.bgColorClass}
          />
        </InfoCard>
      ))}
    </div>
  );
}
