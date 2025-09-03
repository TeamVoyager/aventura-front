
import * as React from "react";

const SvgTicketBack = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="279" height="190" viewBox="0 0 279 190" fill="none">
  <g filter="url(#filter0_d_718_178)">
    <path d="M0 23V159L12 171H252L264 159V23L252 11H12L0 23Z" fill="#F9F9F9"/>
  </g>
  <defs>
    <filter id="filter0_d_718_178" x="-15" y="0" width="294" height="190" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="7.5"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.625373 0 0 0 0 0.302284 0 0 0 0 0.0552161 0 0 0 0.15 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_718_178"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_718_178" result="shape"/>
    </filter>
  </defs>
</svg>
);

export default SvgTicketBack;