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
    <section class="w-full m-auto pt-20 pb-24 bg-[#FFF3F6] pl-5 pr-5">
      <div class="max-w-6xl m-auto flex flex-col">
        <h3 class="text-text font-normal text-4xl">Saiba mais sobre Marketplace</h3>
        <div class="flex flex-col gap-7 lg:flex-row">
          {posts && posts.map(
            post=> (
              <CardBlog data={post} />
            )
          )}
        </div>
      </div>
    </section>
  )
}