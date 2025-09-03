
import * as React from "react";

const SvgTicketBtn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="86" height="190" viewBox="0 0 86 190" fill="none">
  <g filter="url(#filter0_d_718_158)">
    <path d="M15 23V159L27 171H59L71 159V23L59 11H27L15 23Z" fill="#E86F44"/>
  </g>
  <defs>
    <filter id="filter0_d_718_158" x="0" y="0" width="86" height="190" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="7.5"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.625373 0 0 0 0 0.302284 0 0 0 0 0.0552161 0 0 0 0.15 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_718_158"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_718_158" result="shape"/>
    </filter>
  </defs>
</svg>
);

export default SvgTicketBtn;