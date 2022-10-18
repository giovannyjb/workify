import React from 'react'
import { Text, View } from 'react-native'
import GlobalStyles from '../utils/GlobalStyles'

export const HomeScreen = () => {

    return (
        <View style={GlobalStyles.screens}>
            <View style={GlobalStyles.container}>
                <View style={GlobalStyles.view}>
                    <Text style={GlobalStyles.title}>Hello {"Name"}</Text>
                    <Text style={GlobalStyles.paragraph}>Have a nice day.</Text>
                </View>
                <View style={GlobalStyles.blockRow}>
                    <Text style={GlobalStyles.line}>────────────</Text>
                    <View style={GlobalStyles.date}>
                        <Text style={GlobalStyles.date}>Jue 12 Ago</Text>
                    </View>
                    <Text style={GlobalStyles.line}>────────────</Text>
                </View>
                <View style={GlobalStyles.view}>
                    <Text style={GlobalStyles.subtitle}>Tasks</Text>
                    <View style={GlobalStyles.blockCol}>
                        <View style={GlobalStyles.task}>
                            <Text>SASA</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
