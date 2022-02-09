import React from 'react'
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
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
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';


export function SignUpFirstStep(){
    const navigation = useNavigation();

    function handleNextStep(){
      navigation.navigate('SignUpSecondStep')
    }

    function handleBack(){
        navigation.goBack();
    }

    return(
    <KeyboardAvoidingView behavior='position' enabled>
              {/* O TouchableWithoutFeedback captura toques na tela, quando capturar, o onPress ativa o
      fechamento do teclado */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                <Input
                    iconName='user'
                    placeholder='Nome'
                />
                <Input
                    iconName='mail'
                    placeholder='E-mail'
                    keyboardType='email-address'
                />
                <Input
                    iconName='credit-card'
                    placeholder='CNH'
                    keyboardType='numeric'
                />
            </Form>

            <Button 
                title='Próximo'
                onPress={handleNextStep} 
            />
        </Container>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
}
