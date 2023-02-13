import Image from '$live/std/ui/components/Image.tsx';
import type{ Image as LiveImage } from '$live/std/ui/types/Image.ts';
import ActiveLink from '../components/ActiveLink.tsx';

export interface Props {
  title: string;
  logo: LiveImage
}

export default function Header({ logo, title }:Props): any {
  return (
    <div class="w-full p-5 flex flex-row items-center justify-between border-b-1 border-[#E7E9EE] ">
      <img src={logo} width={116} height={42} />

      <nav class="flex flex-row gap-4">
        <ActiveLink active link="#">Produtos</ActiveLink>
        <ActiveLink active link="#">Soluções</ActiveLink>
        <ActiveLink active link="#">Clientes</ActiveLink>
        <ActiveLink active link="#">Parceiros</ActiveLink>
        <ActiveLink active link="#">Empresa</ActiveLink>
        <ActiveLink active link="#">Recursos</ActiveLink>
        <ActiveLink active link="#">Preços</ActiveLink>
      </nav>

      <div class="flex flex-row justify-between gap-2">
        <a>Fale conosco</a>
        <p>Brasil</p>
      </div>
    </div>
  )
}