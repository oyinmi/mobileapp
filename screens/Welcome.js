/* jshint esversion: 6 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Welcome = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <Text style={{ marginBottom: 20, fontSize: 15, fontWeight: "bold" }}> Welcome, Login successful </Text>

            <Text style={{ marginTop: 20, fontSize: 15, fontWeight: "bold" }} onPress={() => navigation.navigate('Home')}> Go back to landing page? </Text>
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
});

export default Welcome;