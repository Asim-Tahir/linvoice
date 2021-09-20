import tw from "twin.macro";
import styled, { css } from "styled-components";
import Color from "color";

export interface ButtonProps {
  color: string;
}

export const BaseButton = styled.button`
  ${tw`inline-flex justify-center items-center`}
  ${tw`px-4 py-2`}
  ${tw`text-sm font-medium`}
  ${tw`rounded-md`}
  ${tw`transition-all duration-100`}
  ${tw`focus:outline-none`}
  ${tw`focus-visible:ring-2 focus-visible:ring-offset-2`}
`;

export const PrimaryButton = styled(BaseButton)`
  ${tw`text-primary-50 bg-primary-700 hover:bg-primary-600 focus-visible:ring-primary-500`}
`;

export const DangerButton = styled(BaseButton)`
  ${tw`text-red-50 bg-red-500 hover:bg-red-400 focus-visible:ring-offset-red-700`}
`;

export const SuccessButton = styled(BaseButton)`
  ${tw`text-green-50 bg-green-800 hover:bg-green-700 focus-visible:ring-offset-green-400`}
`;

export const DashedButton = styled(BaseButton)`
  ${tw`text-gray-50`}
  ${tw`block w-full`}
  ${tw`bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700`}
  ${tw`border-2 border-dashed`}
  ${`focus-visible:ring-offset-gray-400`}
`;

export const ShadeButton = styled.button(({ color }: ButtonProps) => [
  tw`inline-flex justify-center items-center`,
  tw`px-4 py-2`,
  tw`text-sm font-medium`,
  tw`border border-transparent`,
  tw`rounded-md`,
  tw`transition-all duration-100`,
  tw`focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`,
  css`
    --tw-text-opacity: 1;
    color: rgba(
      ${Color(color).lighten(1.2).rgb().array().join(", ")},
      var(--tw-text-opacity)
    );
    --tw-bg-opacity: 1;
    background-color: rgba(
      ${Color(color).rgb().array().join(", ")},
      var(--tw-bg-opacity)
    );

    &:focus-visible {
      --tw-ring-color: rgba(
        ${Color("#efe")
          .lighten(0.1)
          .rgb()
          .array()
          .map((c) => Math.round(c))
          .join(", ")},
        var(--tw-ring-opacity)
      );
    }

    &:hover {
      background-color: ${Color(color).darken(0.35).hex()};
    }
  `,
]);

export default {
  Shade: ShadeButton,
  Primary: PrimaryButton,
  Danger: DangerButton,
  Success: SuccessButton,
  Dashed: DashedButton,
};
