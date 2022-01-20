import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { BackButton } from '../../components/BackButton'
import { StatusBar } from 'react-native'
import { Button } from '../../components/Button'
import { Calendar, DayProps, generateInterval, MarkedDateProps } from '../../components/Calendar'
import { useNavigation, useRoute } from '@react-navigation/native'
import { format, parseISO } from 'date-fns'
import { getPlatformDate } from '../../Utils/getPlatformDate'

import { 
    Container,
    Content,
    DateInfo,
    DateTitle,
    DateValue,
    Footer,
    Header,
    RentalPeriod,
    Title 
} from './styles'

import ArrowSvg from '../../assets/arrow.svg'
import { CarDTO } from '../../dtos/CarDto'

interface RentalPeriod {
    startFormatted: string;
    endFormatted: string;
}

interface Params {
    car: CarDTO;
  }

export function Scheduling(){
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps); 
  const [markedDate, setMarkedDate] = useState<MarkedDateProps>({} as MarkedDateProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);
   
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmRental() {
        navigation.navigate('SchedulingDetails', {
            car,
            dates: Object.keys(markedDate)
        });
  }

  function handleBack(){
    navigation.goBack();
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    // esse if é para garantir que a data inicial não seja maior que a final, invertendo os valores caso isso aconteça
    if(start.timestamp > end.timestamp){
        start = end;
        end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDate(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
        startFormatted: format(getPlatformDate(parseISO(firstDate)), 'dd/MM/yyyy'),
        endFormatted: format(getPlatformDate(parseISO(endDate)), 'dd/MM/yyyy'),
    })

  }

  return(
    <Container>
        <Header>
            <StatusBar 
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />
            <BackButton 
                onPress={handleBack} 
                color={theme.colors.shape}
            />

            <Title>
                Escolha uma {'\n'}
                data de início e {'\n'}
                fim do aluguel
            </Title>

            <RentalPeriod>
                <DateInfo>
                    <DateTitle>DE</DateTitle>
                    <DateValue selected={!!rentalPeriod.startFormatted}>
                        {rentalPeriod.startFormatted}
                    </DateValue>
                </DateInfo>    
                <ArrowSvg />
                <DateInfo>
                    <DateTitle>ATE</DateTitle>
                    {/* O !!rentalPeriod.startFormatted retorna true se existir alguma data selecionada */}
                    <DateValue selected={!!rentalPeriod.endFormatted}>
                        {rentalPeriod.endFormatted}
                    </DateValue>
                </DateInfo>
            </RentalPeriod>
        </Header>

        <Content>
            <Calendar 
                markedDates={markedDate}
                onDayPress={handleChangeDate}
            />
        </Content>

        <Footer>
            <Button 
                title='Confirmar' 
                onPress={handleConfirmRental}
                enabled={!!rentalPeriod.startFormatted}
            />
        </Footer>  

    </Container>
  )
}
