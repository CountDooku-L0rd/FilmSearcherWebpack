declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.sass" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.less" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.png";

declare module "*.jpg";

declare module "*.jpeg";

declare module "*.svg" {
  import React from "react";
  const svg: React.FC<React.SVGProps<SVGSVGElement>>;
  export default svg;
}

declare const __PLATFORM__: "mobile" | "desctop";
