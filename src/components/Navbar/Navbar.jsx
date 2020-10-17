import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const Navbar = props => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.title}>Gallery App</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    navbar: {
        height: 80,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
    },
    title: {
        color: 'black',
    }
})