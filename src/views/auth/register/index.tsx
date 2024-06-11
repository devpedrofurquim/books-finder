import React, { useState } from 'react';
import { Text, View, Image, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../../assets/images/logo-book.png';
import RegisterInput from '../_components/input';
import RegisterButton from '../_components/button';
import { authStyles as styles} from '../styles';

const Register = () => {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const { height } = useWindowDimensions();

    function onRegisterPress() {
        console.warn("Register");
    }

    function onLoginPress() {
        console.warn("Login");
    }

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.root}>
            <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain'/>
            <Text style={styles.title}>Books Finder</Text>
            <RegisterInput placeholder='Nome de usuário' value={username} setValue={setUsername}/>
            <RegisterInput placeholder='Email' value={email} setValue={setEmail}/>
            <RegisterInput placeholder='Senha' value={password} setValue={setPassword} isSecureTextEntry={true}/>
            <RegisterInput placeholder='Confirmar senha' value={confirmPassword} setValue={setConfirmPassword} isSecureTextEntry={true}/>
            <RegisterButton onPress={onRegisterPress} title='Registrar'/>
            <RegisterButton onPress={onLoginPress} title='Já possui uma conta?' type='terciary'/>
        </View>
      </ScrollView>
    )

}

export default Register;