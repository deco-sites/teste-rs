import type{ Image as LiveImage } from '$live/std/ui/types/Image.ts';
import CardBlog from '../components/CardBlog.tsx';

export interface Props {
 
}

export default function Blog({  }: Props){
  return(
    <section class="w-full m-auto pt-20 pb-24 bg-[#E31C58]">
      <div class="max-w-6xl m-auto flex flex-col">
        <h3 class="max-w-4xl text-white font-normal text-5xl">
          Comece a construir sua experiência de marketplace hoje mesmo.
        </h3>
        <button class="bg-[#142032] pt-4 pb-4 pl-5 pr-5 text-white font-medium text-xs rounded-md mt-8 w-[250px]">
          Fale com um consultor
        </button>
      </div>
    </section>
  )
}