import React from 'react'
import { BackButton } from '../../../components/BackButton'
import { useNavigation } from '@react-navigation/native'
import { Bullet } from '../../../components/Bullet';

import { 
    Bullets,
    Container,
    Form,
    FormTitle,
    Header, 
    Subtitle, 
    Title
} from './styles'


export function SignUpFirstStep(){
    const navigation = useNavigation();

    function handleBack(){
        navigation.goBack();
    }

    return(
    <Container>
        <Header>
            <BackButton onPress={handleBack}/>
            <Bullets>
                <Bullet active />
                <Bullet />
            </Bullets>
        </Header>

        <Title>
            Crie sua{'\n'} conta
        </Title>
        <Subtitle>
            Faça seu cadastro de{'\n'}
            forma rápida e fácil
        </Subtitle>

        <Form>
            <FormTitle>1.Dados</FormTitle>
        </Form>
    </Container>
    )
}
