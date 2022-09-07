import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',
  color: 'white',

  span: {
    fontWeight: 'bold'
  },

  '&:hover': {
    filter: 'brightness(0.9)'
  }
})

export default function Home() {
  return (
    <Button>
      <span>Teste</span>
      Entrar
    </Button>
  )
}