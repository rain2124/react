declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}
declare module "styled-jsx" {
  import React from "react";
  interface StyledJsx {
    children: string;
    global?: boolean;
  }
  const JSXStyle: React.ComponentType<StyledJsx>;
  export default JSXStyle;
}