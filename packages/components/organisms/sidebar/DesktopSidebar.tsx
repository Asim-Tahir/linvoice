import tw from "twin.macro";

export const StyledAside = tw.aside`
  py-4 text-gray-500 dark:text-gray-400
  z-30 flex-shrink-0 hidden
  w-64 overflow-y-auto lg:block
  bg-white dark:bg-gray-800
`;

import SidebarContent from "./SidebarContent";

export default function DesktopSidebar(): React.ReactElement {
  return (
    <StyledAside>
      <SidebarContent />
    </StyledAside>
  );
}
