import Image from '$live/std/ui/components/Image.tsx';
import type{ Image as LiveImage } from '$live/std/ui/types/Image.ts';
import ActiveLink from '../components/ActiveLink.tsx';
import { useState } from 'preact/hooks';

export interface Props {
  title: string;
  logo: LiveImage
}

export default function Header({ logo, title }:Props): any {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true)
  }
 
  return (
    <>


    <div class="relative bg-white">
  <div class="mx-auto max-w-7xl px-6">
    <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10 ">
      <div class="flex justify-start lg:w-0 lg:flex-1  md:w-0 md:flex-1">
        <a href="#">
          <img src={logo} width={116} height={42} />
        </a>
      </div>
      <div class="-my-2 -mr-2 md:hidden lg:hidden">
        <button type="button" onClick={handleClick} class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
          <span class="sr-only">Open menu</span>
          
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <nav class="hidden space-x-10 lg:flex md:flex">
        <ActiveLink active link="#">Produtos</ActiveLink>
        <ActiveLink active link="#">Soluções</ActiveLink>
        <ActiveLink active link="#">Clientes</ActiveLink>
        <ActiveLink active link="#">Parceiros</ActiveLink>
        <ActiveLink active link="#">Empresa</ActiveLink>
        <ActiveLink active link="#">Recursos</ActiveLink>
        <ActiveLink active link="#">Preços</ActiveLink>
      </nav>
      <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
        <ActiveLink active link="#">Fale conosco</ActiveLink>
      </div>
    </div>
  </div>
  {open ? (
  <div class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
    <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
      <div class="px-5 pt-5 pb-6">
        <div class="flex items-center justify-between">
          <div>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          </div>
          <div class="-mr-2">
            <button type="button" onClick={()=> { setOpen(false);}} class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Close menu</span>
            </button>
          </div>
        </div>
        <div class="mt-6">
          <nav class="grid gap-y-8">
            <a href="#" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              <span class="ml-3 text-base font-medium text-gray-900">Produtos</span>
            </a>

            <a href="#" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              <span class="ml-3 text-base font-medium text-gray-900">Soluções</span>
            </a>

            <a href="#" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              <span class="ml-3 text-base font-medium text-gray-900">Clientes</span>
            </a>

            <a href="#" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              <span class="ml-3 text-base font-medium text-gray-900">Parceiros</span>
            </a>

            <a href="#" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              <span class="ml-3 text-base font-medium text-gray-900">Empresa</span>
            </a>

            <a href="#" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              <span class="ml-3 text-base font-medium text-gray-900">Empresa</span>
            </a>

            <a href="#" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              <span class="ml-3 text-base font-medium text-gray-900">Preços</span>
            </a>
          </nav>
        </div>
      </div> 
    </div>
  </div>): (<></>)}
</div>

    </>
  )
}