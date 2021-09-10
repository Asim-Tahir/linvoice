import { Link } from "react-router-dom";
import { Icon } from "@/components";

import PageTitle from "@/components/Typography/PageTitle";
import SectionTitle from "@/components/Typography/SectionTitle";
import CTA from "@/components/CTA";
import { Button } from "@windmill/react-ui";

export default function Buttons(): React.ReactElement {
  return (
    <>
      <PageTitle>Buttons</PageTitle>

      <CTA />

      <SectionTitle>Primary</SectionTitle>
      <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
        <div>
          <Button size="larger">Larger Button</Button>
        </div>

        <div>
          <Button size="large">Large Button</Button>
        </div>

        <div>
          <Button>Regular</Button>
        </div>

        <div>
          <Button tag={Link} to="/dashboard">
            Router Link
          </Button>
        </div>

        <div>
          <Button disabled>Disabled</Button>
        </div>

        <div>
          <Button size="small">Small</Button>
        </div>
      </div>

      <SectionTitle>Outline</SectionTitle>
      <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
        <div>
          <Button layout="outline" size="larger">
            Larger Button
          </Button>
        </div>

        <div>
          <Button layout="outline" size="large">
            Large Button
          </Button>
        </div>

        <div>
          <Button layout="outline">Regular</Button>
        </div>

        <div>
          <Button layout="outline" tag={Link} to="/dashboard">
            Router Link
          </Button>
        </div>

        <div>
          <Button layout="outline" disabled>
            Disabled
          </Button>
        </div>

        <div>
          <Button layout="outline" size="small">
            Small
          </Button>
        </div>
      </div>

      <SectionTitle>Link</SectionTitle>
      <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
        <div>
          <Button layout="link" size="larger">
            Larger Button
          </Button>
        </div>

        <div>
          <Button layout="link" size="large">
            Large Button
          </Button>
        </div>

        <div>
          <Button layout="link">Regular</Button>
        </div>

        <div>
          <Button layout="link" tag={Link} to="/dashboard">
            Router Link
          </Button>
        </div>

        <div>
          <Button layout="link" disabled>
            Disabled
          </Button>
        </div>

        <div>
          <Button layout="link" size="small">
            Small
          </Button>
        </div>
      </div>

      <SectionTitle>Icons</SectionTitle>
      <div className="flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4">
        <div>
          <Button iconRight={<Icon name="heart" className="w-4 h-4" />}>
            <span>Icon right</span>
          </Button>
        </div>

        <div>
          <Button iconLeft={<Icon name="heart" />}>
            <span>Icon Left</span>
          </Button>
        </div>

        <div>
          <Button
            icon={<Icon name="heart" className="w-4 h-4" />}
            aria-label="Like"
          />
        </div>

        <div>
          <Button icon={<Icon name="edit" />} aria-label="Edit" />
        </div>

        <div>
          <Button
            icon={<Icon name="heart" />}
            layout="link"
            aria-label="Like"
          />
        </div>
        <div>
          <Button
            icon={<Icon name="heart" />}
            layout="outline"
            aria-label="Like"
          />
        </div>
      </div>
    </>
  );
}
