import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { FlatList, StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { CarDTO } from '../../dtos/CarDto'
import { api } from '../../services/api';
import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { Car } from '../../components/Car';
import { Load } from '../../components/Load';

import { 
  Appointments,
  AppointmentsQuantity,
  AppointmentsTitle,
  CarFooter,
  CarFooterDate,
  CarFooterPeriod,
  CarFooterTitle,
  CarWrapper,
  Container, 
  Content, 
  Header, 
  SubTitle, 
  Title, 
} from './styles'


interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
  startDate: string;
  endDate: string;
}

export function MyCars(){
    const [cars, setCars] = useState<CarProps[]>([])
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const theme = useTheme();

    function handleBack(){
      navigation.goBack();
    }
  

    useEffect(() =>{
        async function fetchCars(){
            try {
                const response = await api.get('/schedules_byuser?user_id=1')
                setCars(response.data);

            } catch (error) {
                console.log(error);
            }
            finally {
              setLoading(false);
            }
        }

        fetchCars();
    },[])

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

            <SubTitle>
              Conforto segurança e praticidade.
            </SubTitle>
      </Header>

      { loading ? <Load /> : 
        <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
            <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
          </Appointments>

          <FlatList 
            data={cars}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <CarWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>
                    <AntDesign 
                      name="arrowright"
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
          />
        </Content>
      }
    </Container>
  )
}
