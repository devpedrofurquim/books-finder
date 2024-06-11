import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../../../assets/images/logo-book.png';
import RegisterInput from './_components/register-input';
import RegisterButton from './_components/register-button';

const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { height } = useWindowDimensions();

    function onRegisterPress() {
        console.warn("Register");
    }

    function onLoginPress() {
        console.warn("Login");
    }

    function onPasswordPress() {
        console.warn("Password");
    }

    const styles = StyleSheet.create({
        root: {
            alignItems: 'center'
        },
        logo: {
            width: '40%',
            height: 100,
            maxWidth: 300,
            maxHeight: 300,
        },
        title: {
            fontSize: 40,
            fontWeight: "600",
            padding: 10,
            color: '#000'
        }
    })

    return (
        <View style={styles.root}>
            <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain'/>
            <Text style={styles.title}>Books Finder</Text>
            <RegisterInput placeholder='Nome de usuário' value={username} setValue={setUsername}/>
            <RegisterInput placeholder='Senha' value={password} setValue={setPassword} isSecureTextEntry={true}/>
            <RegisterButton onPress={onRegisterPress} title='Registrar'/>
            <RegisterButton onPress={onLoginPress} title='Já possui uma conta?' type='secondary'/>
            <RegisterButton onPress={onPasswordPress} title='Esqueceu sua senha?' type='terciary'/>
        </View>
    )

}

export default Register;