import { 
  ServicesContainer, 
  ServicesH1, 
  ServicesH2, 
  ServicesP, 
  ServicesWrapper, 
  ServicesCard, 
  ServicesIcon 
} from './ServicesElements';
 
const Services = () => {
  const Icon1 = './images/svg-1.svg';
  const Icon2 = './images/svg-7.svg';
  const Icon3 = './images/svg-5.svg';

  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>You can access our platform anywhere online in the world.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Premium benefits</ServicesH2>
          <ServicesP>Unlock our special membership card that return 5% cash back.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;