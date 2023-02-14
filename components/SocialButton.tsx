import { ComponentChildren } from "preact";

export interface Props {
  children?: ComponentChildren;
}

export default function SocialButton({children}: Props) {
  return(
    <button class="w-8 h-8 rounded-full bg-[#111C2D] border border-[#4A596B] flex items-center justify-center">
      {children}
    </button>
  )
}