export interface Props {

}

export default function About({}:Props ){
  return(
    <section class="max-w-6xl m-auto flex flex-col gap-14">
      <div class="flex flex-row items-center gap-5">
        <div class="w-1/2" >
          <h2 class="font-normal text-4xl text-text">
            Lance um marketplace hoje mesmo
          </h2>

          <h5 class="font-normal text-xl text-text mt-8">
            Uma única plataforma para comércio e marketplace
          </h5>

          <p class="font-normal text-lg text-[#4A596B] mt-8">
            Lance rapidamente um marketplace, incorporando facilmente novos 
            sellers e sincronizando automaticamente produtos e estoques.
          </p>

          <h5 class="font-normal text-xl text-text mt-8 ml-4">
            Pronto para B2B, B2C e até lojas físicas
          </h5>

          <p class="font-normal text-lg text-[#4A596B] mt-8">
            Independentemente do seu setor, você pode colaborar com
            parceiros para aumentar a variedade de produtos e vender mais em
            todos os pontos de contato com seu cliente.
          </p>

        </div>
        
        <img src="/img/about1.png" class="w-1/2" />
      </div>
   
      <div class="flex flex-row items-center gap-5">
        <img src="/img/about2.png" class="w-1/2" />

        <div class="w-1/2" >
          <h2 class="font-normal text-4xl text-text">
            Expanda seu negócio globalmente.
          </h2>

          <h5 class="font-normal text-xl text-text mt-8 ml-4">
            Aproveite uma rede de sellers internacionais
          </h5>

          <p class="font-normal text-lg text-[#4A596B] mt-8">
            Ao se tornar um Marketplace VTEX, você pode alcançar mais de 
            3.200 lojas online em 38 países.
          </p>

          <h5 class="font-normal text-xl text-text mt-8 ml-4">
            Use múltiplas moedas e idiomas
          </h5>

          <p class="font-normal text-lg text-[#4A596B] mt-8">
            Aumente seu impacto com vários storefronts para suportar diferentes 
            idiomas e gerenciar facilmente moedas e condições de pagamento locais.
          </p>

        </div>
      </div>

      <div class="flex flex-row items-center gap-5">
        <div class="w-1/2" >
          <h2 class="font-normal text-4xl text-text">
            Assuma o controle da sua operação agora
          </h2>

          <h5 class="font-normal text-xl text-text mt-8 ml-4">
            Otimize suas operações
          </h5>

          <p class="font-normal text-lg text-[#4A596B] mt-8">
            Reduza o tempo e os custos de incorporar e gerenciar sellers com 
            mapeamento automático de categorias, logs e sugestões para aprovar 
            e recusar produtos em escala.
          </p>

          <h5 class="font-normal text-xl text-text mt-8 ml-4">
            Aproveite uma plataforma unificada de comércio, marketplace e OMS
          </h5>

          <p class="font-normal text-lg text-[#4A596B] mt-8">
            Potencialize suas experiências omnichannel e de marketplace com 
            recursos que vão desde um OMS unificado até preços e promoções 
            avançados e muito mais.
          </p>

        </div>
        
        <img src="/img/about3.png" class="w-1/2" />
      </div>
    </section>
  )
}