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
          <SocialButton />
          <SocialButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </SocialButton>
          <SocialButton />
          <SocialButton />
          <SocialButton />  
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