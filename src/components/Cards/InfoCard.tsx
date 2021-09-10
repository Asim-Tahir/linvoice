import { Card, CardBody } from "@windmill/react-ui";

export interface InfoCardProps {
  title: string;
  value: string;
  children: React.ReactElement | string;
}

export default function InfoCard({
  title,
  value,
  children: icon,
}: InfoCardProps): React.ReactElement {
  return (
    <Card>
      <CardBody className="flex items-center">
        {icon}
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {value}
          </p>
        </div>
      </CardBody>
    </Card>
  );
}
