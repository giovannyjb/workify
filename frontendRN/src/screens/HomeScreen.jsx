import React, { useRef, useState } from 'react'
import { FlatList, SafeAreaView, Text, TouchableHighlight, View } from 'react-native'
import Task from '../components/Task';
import GlobalStyles from '../utils/GlobalStyles'


export const HomeScreen = () => {
    const sheetRef = useRef(null);
    const [isOpen, setIsOpen] = useState(true);
    const [data, setData] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        }
    ]);


    return (
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.title}>Hello {"Name"}</Text>
            <Text style={GlobalStyles.paragraph}>Have a nice day.</Text>
            <View style={GlobalStyles.blockRow}>
                <Text style={GlobalStyles.date}>Jue 12 Ago</Text>

            </View>
            <Text style={GlobalStyles.subtitle}>Tasks</Text>

            <FlatList
                showsVerticalScrollIndicator={false}
                overScrollMode='never'
                data={data}
                renderItem={({ item }) => (
                    <Task title={item.title} />
                )}
                style={{ marginBottom: 60, marginTop: 20 }}
            />

        </View>
    )
}
