import React, { useState } from 'react';
import { Image, ScrollView, Text, View, useWindowDimensions } from 'react-native';
import { authStyles as styles} from '../styles';
import Logo from '../../../../assets/images/logo-book.png'
import Input from '../_components/input';
import Button from '../_components/button';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppRoutes } from '../../../navigation/_types/navigation';
import { useNavigation } from '@react-navigation/native';
import { errorsLoginType } from '../../../types/erros';

type loginRoute = StackNavigationProp<AppRoutes, 'Login'>;

const Login = () => {

    const navigation = useNavigation<loginRoute>();

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errors, setErrors] = useState<errorsLoginType>({});

    function validateUser() {
        let errors : errorsLoginType = {};

        if (!username) errors.username = "Nome de usuário é necessário";
        if (!password) errors.password = "Senha é necessária";

        setErrors(errors)

        if (Object.keys(errors).length === 0) return true;
    }

    const { height } = useWindowDimensions();

    function onRegisterPress() {
        navigation.navigate('Register')
    }

    function onLoginPress() {
        if (validateUser()) {
            setUsername("");
            setPassword("");
            setErrors({});
            navigation.navigate('Home');
            return true;
        }
    }

    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain'/>
                <Text style={styles.title}>Acessar Conta</Text>
                <Input  placeholder='Nome de usuário' value={username} setValue={setUsername}/>
                {
                    errors.username && (
                        <Text style={styles.error}>{errors.username}</Text>
                    )
                }
                <Input placeholder='Senha' value={password} setValue={setPassword} isSecureTextEntry={true}/>
                {
                    errors.password && (
                        <Text style={styles.error}>{errors.password}</Text>
                    )
                }
                <Button onPress={onLoginPress} title='Entrar'/>
                <Button onPress={onRegisterPress} title='Ainda não tem uma conta?' type='terciary'/>
            </View>
        </ScrollView>
    )
}

export default Login;