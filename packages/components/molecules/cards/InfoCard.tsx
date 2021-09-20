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
      <CardBody className="flex items-center space-x-6">
        {icon}
        <div className="flex flex-col space-y-1 justify-start">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
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
