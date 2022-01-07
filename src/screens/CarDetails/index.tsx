import React from 'react'
import { Accessory } from '../../components/Accessory'
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { useNavigation } from '@react-navigation/native';

import speedtSvg from '../../assets/speed.svg';
import accelerationtSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopletSvg from '../../assets/people.svg';

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
    About,
    Accessories,
    Footer  
} from './styles'
import { Button } from '../../components/Button';


export function CarDetails(){
  const navigation = useNavigation<any>();

  function handleConfirmRental() {
    navigation.navigate('Scheduling');
  }

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
          <Accessories>
            <Accessory name='380km/h' icon={speedtSvg}/>
            <Accessory name='3.2s' icon={accelerationtSvg}/>
            <Accessory name='800 HP' icon={forceSvg}/>
            <Accessory name='Gaolina' icon={gasolineSvg}/>
            <Accessory name='Auto' icon={exchangeSvg}/>
            <Accessory name='2 pessoas' icon={peopletSvg}/>
          </Accessories>

          <About>
            É um automóvel muito top, você precisa ver
          </About>
        </Content>

        <Footer>
          <Button title="Escolher período do aluguel" onPress={handleConfirmRental} />
        </Footer>
      
    </Container>
  )
}
