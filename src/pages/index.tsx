import Image from "next/future/image"

import { useKeenSlider } from 'keen-slider/react'

import { HomeContainer, Product } from "../styles/pages/home"

import tshirt1 from '../assets/tshirts/1.png'
import tshirt2 from '../assets/tshirts/2.png'
import tshirt3 from '../assets/tshirts/3.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer
      ref={sliderRef}
      className="keen-slider"
    >
      <Product className="keen-slider__slide">
        <Image src={tshirt1} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={tshirt2} alt="" width={520} height={480} />

        <footer>
          <strong>Camiseta 2</strong>
          <span>R$ 65,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={tshirt3} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta 3</strong>
          <span>R$ 109,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={tshirt3} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta 3</strong>
          <span>R$ 109,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}