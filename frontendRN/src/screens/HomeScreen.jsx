import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const HomeScreen = () => {
    return (
        <View style={styles.homeScreen}>
            <Text>Hola</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    homeScreen: {
        backgroundColor: "#242424",
        height: "100%"
    },

});