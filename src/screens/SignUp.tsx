import React from 'react'
import { styles } from '../style';
import {
    Text,
    SafeAreaView,
    ScrollView,
    View,
    ImageBackground,
} from 'react-native';


function SignUp() {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../public/new_wallpaper_mobile.png')} resizeMode='cover' style={styles.image} >
                <ScrollView style={styles.scrollView}>
                    <View style={styles.content}>
                        <Text>Sign Up</Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default SignUp