import React from 'react'
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { BackButton } from '../../../components/BackButton'
import { useNavigation } from '@react-navigation/native'
import { Bullet } from '../../../components/Bullet';
import { useTheme } from 'styled-components'

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
import { PasswordInput } from '../../../components/PasswordInput';


export function SignUpSecondStep(){
    const navigation = useNavigation();
    const theme = useTheme();

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
                <FormTitle>1.Senha</FormTitle>
                <PasswordInput
                    iconName='lock'
                    placeholder='Senha'
                />
                <PasswordInput
                    iconName='lock'
                    placeholder='Repetir senha'
                />
            </Form>

            <Button 
                title='Cadastrar'
                color={theme.colors.success} 
            />
        </Container>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
}
