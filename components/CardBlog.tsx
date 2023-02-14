import type{ Image as LiveImage } from '$live/std/ui/types/Image.ts';

interface Props{
  data: {
    img: LiveImage;
    title: string;
    text: string;
  }
}

export default function CardBlog({ data }:Props) {
  return( 
    <div class="w-1/3 h-[500px]" >
      <img src={data.img} class="w-[100%] h-[200px]" />
      <h4 class="font-normal text-xl m-[30px]">
        {data.title}
      </h4>
      <p class="font-normal text-sm">
        {data.text}
      </p>
    </div>
  )
}