import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { BackButton } from '../../components/BackButton'
import { StatusBar } from 'react-native'
import { Button } from '../../components/Button'
import { Calendar, DayProps, generateInterval, MarkedDateProps } from '../../components/Calendar'
import { useNavigation } from '@react-navigation/native'

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


export function Scheduling(){
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps); 
  const [markedDate, setMarkedDate] = useState<MarkedDateProps>({} as MarkedDateProps);
  const theme = useTheme();
  const navigation = useNavigation<any>();

  function handleConfirmRental() {
    navigation.navigate('SchedulingDetails');
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
                    <DateValue selected={false}>18/06/2021</DateValue>
                </DateInfo>    
                <ArrowSvg />
                <DateInfo>
                    <DateTitle>ATE</DateTitle>
                    <DateValue selected={false}>18/06/2021</DateValue>
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
            <Button title='Confirmar' onPress={handleConfirmRental}/>
        </Footer>  

    </Container>
  )
}
