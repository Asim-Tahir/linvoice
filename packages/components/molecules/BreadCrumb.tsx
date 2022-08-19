import { useLocation, NavLink } from "react-router-dom";
import tw, { styled } from "twin.macro";

export const StyledNav = styled.nav`
  ${tw`flex justify-start items-center`}
  ${tw`text-gray-700 dark:text-gray-200 capitalize text-2xl font-semibold`}
  ${tw`my-6`}

  & > *:not(:last-child)::after {
    ${tw`[content:"/"] p-4`}
  }
`;

export default function BreadCrumb(): React.ReactElement {
  const location = useLocation();
  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");

  return (
    <StyledNav>
      {crumbs.map((crumb, i) => {
        if (i + 1 === crumbs.length) {
          return (
            <span
              className="text-gray-500 dark:text-gray-400 cursor-default"
              key={i}
            >
              {crumb}
            </span>
          );
        } else {
          return (
            <NavLink key={i} to={`/${crumbs.slice(0, i + 1).join("/")}`}>
              {crumb}
            </NavLink>
          );
        }
      })}
    </StyledNav>
  );
}
