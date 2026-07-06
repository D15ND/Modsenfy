/// <reference types="vite/client" />

declare module '*.svg?react' {
  import { FC, SVGProps } from 'react';

  const SVG: FC<SVGProps<SVGSVGElement>>;
  export default SVG;
}
