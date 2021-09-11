import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";

export default function Sidebar(): React.ReactElement {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
}
