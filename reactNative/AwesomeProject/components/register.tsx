import React from 'react';
import type {PropsWithChildren} from 'react';
import {
    Button,
    ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

function UserRegister(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput placeholder='Correo'></TextInput>
                <TextInput placeholder='Contraseña'></TextInput>
                <Button title='send'></Button>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        display:"flex",
        backgroundColor:"blue",
        width:"100%",
        height:"100%"
    },
    form:{
        display:"flex",
        backgroundColor:"purple",
        width:50,
        height:70


    }
})
export default UserRegister