import React, { useState } from 'react';
import { Text, View, Image, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../../assets/images/logo-book.png';
import Input from '../_components/input';
import Button from '../_components/button';
import { authStyles as styles} from '../styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppRoutes } from '../../../navigation/_types/navigation';
import { useNavigation } from '@react-navigation/native';
import { errorsRegisterType } from '../../../types/erros';

type registerRoute = StackNavigationProp<AppRoutes, 'Login'>;


const Register = () => {

    const navigation = useNavigation<registerRoute>();

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [errors, setErrors] = useState<errorsRegisterType>({});

    const { height } = useWindowDimensions();

    function validateUser() {
        let errors : errorsRegisterType = {};

        if (!username) errors.username = "Nome de usuário é necessário";
        if (!password) errors.password = "Senha é necessária";
        if (!email) errors.email = "Email é necessário";
        if (!confirmPassword) errors.confirmPassword = "Confirmação de senha é necessária";

        setErrors(errors)

        if (Object.keys(errors).length === 0) return true;

    }

    function onRegisterPress() {
        if (validateUser()) {
            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setErrors({});
            navigation.navigate("Home");
        }
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
            <Input placeholder='Nome de usuário' value={username} setValue={setUsername}/>
                {
                    errors.username && (
                        <Text style={styles.error}>{errors.username}</Text>
                    )
                }
            <Input placeholder='Email' value={email} setValue={setEmail}/>
                {
                    errors.email && (
                        <Text style={styles.error}>{errors.email}</Text>
                    )
                }
            <Input placeholder='Senha' value={password} setValue={setPassword} isSecureTextEntry={true}/>
                {
                    errors.password && (
                        <Text style={styles.error}>{errors.password}</Text>
                    )
                }
            <Input placeholder='Confirmar senha' value={confirmPassword} setValue={setConfirmPassword} isSecureTextEntry={true}/>
                {
                    errors.confirmPassword && (
                        <Text style={styles.error}>{errors.confirmPassword}</Text>
                    )
                }
            <Button onPress={onRegisterPress} title='Registrar'/>
            <Text>Ao se registrar, você confirma que aceita nossos <Text style={{color: "black"}} onPress={onTermsOfUsePress}>Termos de Uso</Text>
             e <Text style={{color: "black"}} onPress={onPrivacyPolicyPress}>Política de Privacidade.</Text></Text>
            <Button onPress={onLoginPress} title='Já possui uma conta?' type='terciary'/>
        </View>
      </ScrollView>
    )

}

export default Register;