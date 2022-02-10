import React, { useState } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { BackButton } from '../../../components/BackButton'
import { useNavigation, useRoute } from '@react-navigation/native'
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

interface Params {
    user: {
        name: string,
        email: string,
        driveLicense: string,
    }
}


export function SignUpSecondStep(){
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const navigation = useNavigation();
    const route = useRoute();
    const theme = useTheme();

    const { user } = route.params as Params;


    function handleBack(){
        navigation.goBack();
    }

    function handleRegister(){
       try {
            //verifico se as senhas estão vazias
            if(!password || !passwordConfirm){
               return Alert.alert('Alerta','Informe a senha e a confirmação!');
            }

            //verifica se as senhas são iguais
            if(password != passwordConfirm){
                return Alert.alert('Alerta','As senhas são diferentes!')
            }

            //enviar para API e cadastrar

            
       } catch (error) {
           
       } 
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
                    onChangeText={setPassword}
                    value={password}
                />
                <PasswordInput
                    iconName='lock'
                    placeholder='Repetir senha'
                    onChangeText={setPasswordConfirm}
                    value={passwordConfirm}
                />
            </Form>

            <Button 
                title='Cadastrar'
                color={theme.colors.success}
                onPress={handleRegister} 
            />
        </Container>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
}
