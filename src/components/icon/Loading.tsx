import * as React from "react";
import { SVGProps } from "react";

const SvgLoading = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 400 400"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <circle cx={200} cy={50} r={15} />
    <circle cx={305} cy={95} r={20} />
    <circle cx={350} cy={200} r={25} />
    <circle cx={305} cy={305} r={30} />
    <circle cx={200} cy={350} r={35} />
    <circle cx={95} cy={305} r={40} />
    <circle cx={50} cy={200} r={45} />
  </svg>
);

export default SvgLoading;
