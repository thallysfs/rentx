import React, { useState } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { BackButton } from '../../../components/BackButton'
import { useNavigation } from '@react-navigation/native'
import { Bullet } from '../../../components/Bullet';
import * as Yup from 'yup'

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
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[driveLicense, setDriveLicense] = useState('');

    const navigation = useNavigation();

    function handleBack(){
        navigation.goBack();
    }

    async function handleNextStep(){
        try {
            const schema = Yup.object().shape({
                driveLicense: Yup.string()
                    .required('CNH é obrigatória'),
                email: Yup.string()
                    .email('E-mail inválido')
                    .required('E-mail é obrigatório'),
                name: Yup.string()
                    .required('Nome obrigatório')

            })

            const data = {name, email, driveLicense}
            await schema.validate(data);

            navigation.navigate('SignUpSecondStep', {user: data})
        } catch (error) {
            if(error instanceof Yup.ValidationError){
                Alert.alert('Opa', error.message);
            }
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
                <FormTitle>1.Dados</FormTitle>
                <Input
                    iconName='user'
                    placeholder='Nome'
                    onChangeText={setName}
                    value={name}
                />
                <Input
                    iconName='mail'
                    placeholder='E-mail'
                    keyboardType='email-address'
                    onChangeText={setEmail}
                    value={email}
                />
                <Input
                    iconName='credit-card'
                    placeholder='CNH'
                    keyboardType='numeric'
                    onChangeText={setDriveLicense}
                    value={driveLicense}
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
