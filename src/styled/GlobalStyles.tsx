import { createGlobalStyle } from "styled-components";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
	body {
		-webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
	}
`;

export default function GlobalStyles(): React.ReactElement {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  );
}
