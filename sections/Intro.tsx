import Image from '$live/std/ui/components/Image.tsx';
import type{ Image as LiveImage } from '$live/std/ui/types/Image.ts';
import ActiveLink from '../components/ActiveLink.tsx';

export interface Props {
  title: string;
  description: string;
  banner: LiveImage
}

export default function Intro({ banner, title, description }:Props): any {
  return (
    <section class="max-w-6xl m-auto bg-[##F8F7FC]">
      <div class="w-full p-5 flex flex-col items-center gap-3 justify-between lg:flex-row ">
        <div class="lg:w-1/2">
          <span class="font-normal text-text text-sm">Marketplace</span>
          <h1 class="font-normal text-text text-5xl">
            {title}
            {/* Aumente seu alcance e reduza custos com um modelo de marketplace */}
          </h1>
          <p class="font-normal text-text text-base text-[#4A596B] mt-4" >
            {description}
            {/* Aproveite uma plataforma de comércio colaborativo com marketplace nativo e OMS unificado para acelerar seu time-to-revenue. */}
          </p>
          <button class="bg-primary pt-4 pb-4 pl-5 pr-5 text-white font-medium text-xs rounded-md mt-8">
          Fale com um consultor
        </button>
        </div>
        <div class="lg:w-1/2" >
          <img src={banner} class="w-full h-[474.39px]" />
        </div>
      </div>

      <div class="flex flex-col items-center gap-8 mt-48 pb-24 lg:flex-row">
        <div class="w-1/2 lg:w-1/3">
          <img src="/img/icon1.png" />
          <span class="font-normal text-text text-xl mt-4">Aumente sua receita</span>
          <p class="font-normal text-[#4A596B] text-sm mt-4">
            Adicione com rapidez e facilidade novos produtos 
            e serviços de um grande número de sellers.
          </p>
        </div>
        <div class="w-1/2 lg:w-1/3"> 
          <img src="/img/icon2.png" />
          <span class="font-normal text-text text-xl mt-4">Seja essencial para os clientes</span>
          <p class="font-normal text-[#4A596B] text-sm mt-4">
          Crie uma loja que oferece tudo o que seus clientes precisam.
          </p>
        </div>
        <div class="w-1/2 lg:w-1/3">
          <img src="/img/icon3.png" />
          <span class="font-normal text-text text-xl mt-4">Reduza custos e riscos</span>
          <p class="font-normal text-[#4A596B] text-sm mt-4">
            Elimine os custos adicionais de estoque e 
            cadeia de suprimentos ao incluir novas marcas
            e categorias de produtos ao seu portfólio.
          </p>
        </div>
      </div>
    </section>
  )
}