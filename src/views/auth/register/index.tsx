import React from 'react';
import { Text, View, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../../../assets/images/logo-book.png';
import RegisterInput from './_components/register-input';

const Register = () => {

    const { height } = useWindowDimensions();

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
            <RegisterInput/>
        </View>
    )
}

export default Register;