import { Flexbox } from 'components'
import maps from '../../assets/about venue/maps.png'

const Map = () => {
  return (
    <Flexbox>
      <img src={maps} alt="Mapa" style={{ width: '700px', borderRadius: '10px' }} />
    </Flexbox>
  )
}
export default Map
