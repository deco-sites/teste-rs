import { ComponentChildren } from "preact";

export interface Props{
  active: boolean;
  link: string;
  children: ComponentChildren;
}

export default function ActiveLink({link, active, children}:Props) {
  return( 
    <a href={link} class="font-normal font-inter text-text text-sm " >
      {children}
    </a>
  )


  
}