import "twin.macro";
import styledImport, { css as cssImport } from "styled-components";

declare module "twin.macro" {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module "react" {
  import { CSSProp } from "styled-components";
  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp;
  }
  // The inline svg css prop
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSProp;
  }
}

// The 'as' prop on styled components
declare global {
  namespace JSX {
    import { ExoticComponent } from "react";
    interface IntrinsicAttributes<T> extends DOMAttributes<T> {
      as?: string | Element | ExoticComponent | unknown;
    }
  }
}
