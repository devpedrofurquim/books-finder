import React, { useState } from 'react';
import { Image, ScrollView, Text, View, useWindowDimensions } from 'react-native';
import { authStyles as styles} from '../styles';
import Logo from '../../../../assets/images/logo-book.png'
import RegisterInput from '../_components/input';
import RegisterButton from '../_components/button';

const Login = () => {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { height } = useWindowDimensions();

    function onRegisterPress() {
        console.warn("Register");
    }

    function onLoginPress() {
        console.warn("Login");
    }

    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain'/>
                <Text style={styles.title}>Acessar Conta</Text>
                <RegisterInput  placeholder='Nome de usuário' value={username} setValue={setUsername}/>
                <RegisterInput placeholder='Senha' value={password} setValue={setPassword} isSecureTextEntry={true}/>
                <RegisterButton onPress={onLoginPress} title='Entrar'/>
                <RegisterButton onPress={onRegisterPress} title='Ainda não tem uma conta?' type='terciary'/>
            </View>
        </ScrollView>
    )
}

export default Login;