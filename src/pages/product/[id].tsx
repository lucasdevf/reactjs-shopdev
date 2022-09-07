import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/future/image";
import { useRouter } from "next/router";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";
import { moneyFormatter } from "../../utils/formatter";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
  }
}

export default function Product({
  product
}: ProductProps) {

  const { isFallback } = useRouter()

  if(isFallback) {
    return <p>Loading....</p>
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

  // buscar os mais vendidos/mais acessados e passar para os paths
    
  return {
    paths: [
      { params: { id: 'prod_MOBA0eB1ZPOqza' } }
    ],
    fallback: true // existe também a opção blocking
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {

  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: moneyFormatter.format(price.unit_amount / 100),
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum aspernatur aliquam quos inventore ad, modi doloremque tempora eveniet in optio, quis eaque repudiandae? Fugit tenetur odio vel ea incidunt!'
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }

}
