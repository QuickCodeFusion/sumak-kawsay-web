import { useLanguage } from '@/app/languageProvider'

const Sales = (): JSX.Element => {
  const text: Record<string, Record<string, string>> = {
    1: {
      en: 'cacao sales \n 100m',
      es: `Ventas de cacao
      100m`,
      pt: 'Vendas de cacao \n 100m'
    },
    2: {
      en: 'coffee sales 500m',
      es: 'Ventas de cafe 500m',
      pt: 'Vendas de cafe 500m'
    },
    3: {
      en: 'realstate sales 300m',
      es: 'Ventas de bienes raíces 300m',
      pt: 'Vendas de imóveis 300m'
    },
    4: {
      en: 'online services 400m',
      es: 'Servicios en linea 400m',
      pt: 'Serviços on-line 400m'
    }
  }
  const { language } = useLanguage()
  return (
    <div className="my-12 flex flex-col md:grid grid-cols-4 gap-10 w-full place-items-center px-8 items-center justify-center">
          <h3 className="text-3xl mb-4 text-center w-[10rem] font-semibold uppercase leading-10">
            {text[1][language]}
          </h3>
          <h3 className="text-3xl mb-4 text-center font-semibold w-[10rem] uppercase leading-10">
            {text[2][language]}
          </h3>
          <h3 className="text-3xl mb-4 text-center font-semibold w-[10rem] uppercase leading-10">
            {text[3][language]}
          </h3>
          <h3 className="text-3xl mb-4 text-center font-semibold w-[10rem] uppercase leading-10">
            {text[4][language]}
          </h3>
    </div>
  )
}

export default Sales
