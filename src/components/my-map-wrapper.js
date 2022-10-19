import { Wrapper, Status } from '@googlemaps/react-wrapper'
import MyMapComponent from './my-map'

const render = (status) => {
  if (status === Status.FAILURE) return <div>Error</div>
  return <div>Spinner</div>
}

const MyMapWrapper = ({center}) => (
  <Wrapper apiKey={'YOUR_API_KEY'} render={render}>
    <MyMapComponent />
  </Wrapper>
)
export default MyMapWrapper
