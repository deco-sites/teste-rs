import type{ Image as LiveImage } from '$live/std/ui/types/Image.ts';
import CardBlog from '../components/CardBlog.tsx';
import SocialButton from '../components/SocialButton.tsx';



export interface Props {
 
}

export default function Footer({  }: Props){
  return(
    <section class="w-full m-auto bg-[#142032]">
      <div class="max-w-6xl p-8 pt-12 pb-12 m-auto flex flex-row flex-wrap justify-between">
        <div class="max-w-[160px] flex flex-col gap-2">
          <span class="text-white font-normal text-xl">Produtos</span>
          
          <a class='text-[#A1A8B3] text-base'>Visão Geral da Plataforma</a>
          <a class='text-[#A1A8B3] text-base'>Plataforma de Comércio Digital</a>
          <a class='text-[#A1A8B3] text-base'>Gerenciamento de Marketplaces e Sellers</a>
          <a class='text-[#A1A8B3] text-base'>Sistema de Gerenciamento de Pedidos</a>
        </div>

        <div class="max-w-[160px] flex flex-col gap-2">
          <span class="text-white font-normal text-xl">Soluções</span>
          
          <a class='text-[#A1A8B3] text-base'>Comércio B2C</a>
          <a class='text-[#A1A8B3] text-base'>Comércio B2B</a>
          <a class='text-[#A1A8B3] text-base'>Marketplace</a>
          <a class='text-[#A1A8B3] text-base'>Comércio Omnichannel B2C</a>
        </div>

        <div class="max-w-[160px] flex flex-col gap-2">
          <span class="text-white font-normal text-xl">Parceiros</span>
          
          <a class='text-[#A1A8B3] text-base'>Seja um Parceiro</a>
          <a class='text-[#A1A8B3] text-base'>Encontre um Parceiro</a>
          <a class='text-[#A1A8B3] text-base'>Parceiro AWS</a>
        </div>

        <div class="max-w-[160px] flex flex-col gap-2">
          <span class="text-white font-normal text-xl">Empresa</span>
          
          <a class='text-[#A1A8B3] text-base'>Sobre Nós</a>
          <a class='text-[#A1A8B3] text-base'>Clientes</a>
          <a class='text-[#A1A8B3] text-base'>Sala de Imprensa</a>
          <a class='text-[#A1A8B3] text-base'>Relação com Investidores</a>
          <a class='text-[#A1A8B3] text-base'>Carreiras</a>
          <a class='text-[#A1A8B3] text-base'>Fale Conosco</a>
        </div>

        <div class="max-w-[160px] flex flex-col gap-2">
          <span class="text-white font-normal text-xl">Recursos</span>
          
          <a class='text-[#A1A8B3] text-base'>Blog</a>
          <a class='text-[#A1A8B3] text-base'>Central de Recursos</a>
          <a class='text-[#A1A8B3] text-base'>App Store</a>
          <a class='text-[#A1A8B3] text-base'>Portal do Desenvolvedor</a>
          <a class='text-[#A1A8B3] text-base'>Help Center</a>
        </div>
      </div>
      
      <div class="border-t border-[#4A596B]" />

      <div class="m-auto max-w-6xl p-8 flex flex-col gap-8 lg:flex-row justify-between">
        <div class="flex flex-row gap-4">
          <SocialButton>
            <img src="/img/instagram.png" />  
          </SocialButton>
          <SocialButton>
            <img src="/img/instagram.png" />  
          </SocialButton>
          <SocialButton>
            <img src="/img/linkedin.png" />
          </SocialButton>
          <SocialButton>
            <img src="/img/youtube.png" />
          </SocialButton>
          <SocialButton >
            <img src="/img/youtube.png" />
          </SocialButton>
        </div>

        <nav class="flex flex-row flex-wrap gap-4">
          <a class="text-[#A1A8B3] font-normal text-base">Politicas de Privacidade</a>
          <a class="text-[#A1A8B3] font-normal text-base">Jurídico</a>
          <a class="text-[#A1A8B3] font-normal text-base">Compliance</a>
          <a class="text-[#A1A8B3] font-normal text-base">Segurança</a>
          <a class="text-[#A1A8B3] font-normal text-base">Mapa do site</a>
        </nav>
      </div>
    </section>
  )
}