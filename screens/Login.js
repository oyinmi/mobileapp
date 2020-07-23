/* jshint esversion: 6 */

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Login = ({ navigation }) => {

    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    readStorage = async () => {
        const result = await AsyncStorage.getItem('Register');
            if (!result) {
                return null;
            }
            let jsonObject = JSON.parse(result);
            return jsonObject;
    };

    onLogin =async () => {
        const savedDetails = await readStorage();
        if (!savedDetails) {
            console.log('Login account not found');
        }
        if (savedDetails.email === email && savedDetails.password === password) {
            navigation.navigate('Welcome');
        } else {
            console.log('login failed');
        }
    };

    return (
        <View style={styles.container}>
            
            <Text style={{ marginBottom: 20, fontSize: 15, fontWeight: "bold" }}> Welcome to Login Page </Text>

            <View>
                <Text style={styles.inputTitle}> Email </Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Please enter valid email' 
                    placeholderTextColor="black"
                    value={email}
                    onChangeText={setEmail}    
                />
            </View>
            <View>
                <Text style={styles.inputTitle}> Password </Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Please enter valid password'
                    placeholderTextColor="black" 
                    value={password}
                    onChangeText={setPassword} 
                    secureTextEntry={true}   
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={onLogin}>
                <Text style={styles.buttonText}> Login </Text>
            </TouchableOpacity>

            <Text style={{ marginTop: 20, fontSize: 15, fontWeight: "bold" }} onPress={() => navigation.navigate('ForgotPassword')}> Forgot Password? </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputTitle: {
        padding: 5,
    },
    input: {
        width: 350,
        height: 50,
        borderColor: '#000',
        color: '#000',
        backgroundColor: 'pink',
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 5,
        paddingStart: 8,
    },
    button: {
        backgroundColor: '#000',
        width: '30%',
        height: 35,
        paddingVertical: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        margin: 10,
    }
});

export default Login;