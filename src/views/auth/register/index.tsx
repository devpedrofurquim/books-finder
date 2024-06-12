import React, { useState } from 'react';
import { Text, View, Image, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../../assets/images/logo-book.png';
import RegisterInput from '../_components/input';
import RegisterButton from '../_components/button';
import { authStyles as styles} from '../styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppRoutes } from '../../../navigation/_types/navigation';
import { useNavigation } from '@react-navigation/native';

type registerRoute = StackNavigationProp<AppRoutes, 'Login'>;


const Register = () => {

    const navigation = useNavigation<registerRoute>();

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const { height } = useWindowDimensions();

    function onRegisterPress() {
        console.warn("Registrar");

        // Validate user
        navigation.navigate('Home');
    }

    function onLoginPress() {
        console.warn("Entrar");

        navigation.navigate('Login')
    }

    function onTermsOfUsePress() {
        console.warn("Termos de Uso");
    }

    function onPrivacyPolicyPress() {
        console.warn("Política de Privacidade");
    }

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.root}>
            <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain'/>
            <Text style={styles.title}>Criar Conta</Text>
            <RegisterInput placeholder='Nome de usuário' value={username} setValue={setUsername}/>
            <RegisterInput placeholder='Email' value={email} setValue={setEmail}/>
            <RegisterInput placeholder='Senha' value={password} setValue={setPassword} isSecureTextEntry={true}/>
            <RegisterInput placeholder='Confirmar senha' value={confirmPassword} setValue={setConfirmPassword} isSecureTextEntry={true}/>
            <RegisterButton onPress={onRegisterPress} title='Registrar'/>
            <Text>Ao se registrar, você confirma que aceita nossos <Text style={{color: "black"}} onPress={onTermsOfUsePress}>Termos de Uso</Text>
             e <Text style={{color: "black"}} onPress={onPrivacyPolicyPress}>Política de Privacidade.</Text></Text>
            <RegisterButton onPress={onLoginPress} title='Já possui uma conta?' type='terciary'/>
        </View>
      </ScrollView>
    )

}

export default Register;