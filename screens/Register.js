/* jshint esversion: 6 */

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Register = ({navigation}) => { 
    const[password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    setItemStorage = async (key, value) => {
        try {
            await AsyncStorage.setItem(key,JSON.stringify(value));
        } catch (error) {
            // Error saving data
            console.log("saving data error");
        }
    };

    saveStorage = async () => {
       await setItemStorage("Register", {name, email, password });
        navigation.navigate('Login');
    };

   return (
       <View style={styles.container}>
           <Text style={{ paddingTop:100, marginBottom: 20, fontSize: 15, fontWeight: "bold" }}> Welcome to Registration Page </Text>

           <View>
               <Text style={styles.inputTitle}> Name </Text>
               <TextInput 
                   style={styles.input} 
                   placeholder='Please enter name' 
                   placeholderTextColor="black"
                   value={name}
                   onChangeText={setName}/>
           </View>  
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
                    placeholder='Please enter password'
                    placeholderTextColor="black"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
           </View>  

           <TouchableOpacity style={styles.button} onPress={this.saveStorage}>   
               <Text style={styles.buttonText}> Register </Text>
           </TouchableOpacity>

           <Text style={{ marginTop: 20, fontSize: 15, fontWeight: "bold" }} onPress={() => navigation.navigate('Login')}> Login </Text>
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
        backgroundColor: 'pink',
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 5,
        paddingStart: 8,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        width: '30%',
        height: 35,
        paddingVertical: 10,
        marginTop: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        margin: 10,
    }
});

export default Register;