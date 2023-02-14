import type{ Image as LiveImage } from '$live/std/ui/types/Image.ts';
import CardBlog from '../components/CardBlog.tsx';

export interface Props {
  posts:{
    img: LiveImage;
    title: string;
    text: string;
  }[];
}

export default function Blog({ posts }: Props){
  return(
    <section class="max-w-6xl m-auto pt-20 pb-24 flex flex-col bg-[#FFF3F6]">
      <h3 class="text-text font-normal text-4xl">Saiba mais sobre Marketplace</h3>
      <div class="flex flex-row gap-7">
        {posts && posts.map(
          post=> (
            <CardBlog data={post} />
          )
        )}
      </div>
    </section>
  )
}