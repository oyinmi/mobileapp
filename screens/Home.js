/* jshint esversion: 6 */

import React from 'react';
import {  StyleSheet, View, Button, Alert, Text } from 'react-native';

export default function App({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={{paddingBottom: 30, fontWeight: 'bold', fontSize: 20}}> Welcome to our mobile shop </Text>
            <Button
                title="Welcome"
                color= "#000"
                onPress={() => Alert.alert('Mobile Shop', 'welcome to mobile', 
                    [
                        {
                            text: 'Register',
                            onPress: () => navigation.navigate('Register'),
                        },
                        {
                            text: 'Login',
                            onPress: () => navigation.navigate('Login'),
                        },
                    ],
                )} 
            />
 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

