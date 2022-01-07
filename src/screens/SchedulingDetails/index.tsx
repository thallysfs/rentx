import React from 'react'
import { Feather} from '@expo/vector-icons'
import { Accessory } from '../../components/Accessory'
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'

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
    Accessories,
    Footer,  
    RentalPeriod,
    DateInfo,
    CalendarIcon,
    DateValue,
    DateTitle,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal
} from './styles'
import { Button } from '../../components/Button';



export function SchedulingDetails(){
  const theme = useTheme();
  const navigation = useNavigation<any>();

  function handleConfirmRental() {
    navigation.navigate('SchedulingComplete');
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

          <RentalPeriod>
            <CalendarIcon>
              <Feather 
                name="calendar"
                size={RFValue(24)}
                color={theme.colors.shape}
              />
            </CalendarIcon>

            <DateInfo>
              <DateTitle>DE</DateTitle>
              <DateValue>18/06/2021</DateValue>
            </DateInfo>

            <Feather 
                name="chevron-right"
                size={RFValue(10)}
                color={theme.colors.shape}
            />
            <DateInfo>
              <DateTitle>DE</DateTitle>
              <DateValue>18/06/2021</DateValue>
            </DateInfo>
          </RentalPeriod>

          <RentalPrice>
            <RentalPriceLabel>TOTAL</RentalPriceLabel>
            <RentalPriceDetails>
              <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
              <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
            </RentalPriceDetails>
          </RentalPrice>
        </Content>

        <Footer>
          <Button title="Alugar agora" color={theme.colors.success} onPress={handleConfirmRental} />
        </Footer>
      
    </Container>
  )
}
