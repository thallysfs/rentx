import React from 'react'
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { 
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About  
} from './styles'

export function CarDetails(){
  return(
    <Container>
        <Header>
            <BackButton onPress={() => {}} />
        </Header>
        <CarImages>
          <ImageSlider 
            imagesUrl={['https://www.pngall.com/wp-content/uploads/2016/05/Audi-Free-Download-PNG.png']} 
          />
        </CarImages>

        <Content>
          <Details>
            <Description>
              <Brand>Lamborghini</Brand>
              <Name>Huracan</Name>
            </Description>

            <Rent>
              <Period>Ao dia</Period>
              <Price>R$ 580</Price>
            </Rent>
          </Details>

          <About>
            É um automóvel muito top, você precisa ver
          </About>
        </Content>
      
    </Container>
  )
}
