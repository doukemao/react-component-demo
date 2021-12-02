import * as React from "react";
import { SVGProps } from "react";

const SvgSuccess = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 400 400"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="m40 200 110 140 210-240"
      fill="transparent"
      stroke="#000"
      strokeWidth={35}
      strokeDasharray={700}
    >
      <animate
        attributeName="stroke-dashoffset"
        from={700}
        to={0}
        dur="0.6s"
        repeatCount={0}
      />
    </path>
  </svg>
);

export default SvgSuccess;
