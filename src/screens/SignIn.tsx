import React, { useState } from 'react'
import { styles } from './style';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'
import {
    Text,
    View,
    Button,
    TextInput,
    Image,
    TouchableOpacity,
    StatusBar,
    Alert,
    SafeAreaView,
    ScrollView,
    ImageBackground,
} from 'react-native';

const backImage = require("../../assets/new_wallpaper_mobile.png");

function SignIn({ navigation }: any) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onHandleLogin = () => {
        if (email !== '' && password !== '') {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => console.log('Sign in success'))
                .catch((error) => Alert.alert('Sign in error', error.message || error))
        }
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.form}>
                <Text style={styles.title}>Bienvenido!</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Correo electronico"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoFocus={true}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
                    <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 18 }}> Iniciar sesion</Text>
                </TouchableOpacity>
                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                    <Text style={{ color: 'gray', fontWeight: '600', fontSize: 14 }}>Aun no tienes una cuenta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                        <Text style={{ color: '#f57c00', fontWeight: '600', fontSize: 14 }}> Registrate</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <StatusBar barStyle="light-content" />
        </View>
    )
}

export default SignIn