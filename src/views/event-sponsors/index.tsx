// siga o mockup de schedule para criar o mockup de sponsors
// renomeie as fotos dentro de assets/sponsors para nome-do-sponsor.jpg
// exporte a imagem de background dessa section no Figma
// use o componente de SectionHeader que vc criou anteriormente
import sponsors from '../../mockups/sponsors.json'

const EventSponsors = () => {
  console.log(typeof sponsors[0].image)

  return <img src={sponsors[0].image} alt="" />
}

export default EventSponsors
