import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useCallback, useRef, useState } from 'react';

import { Button, Modal, Pressable, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import GlobalStyles from '../utils/GlobalStyles';
import ModalBottomHalf from './ModalBottomHalf';

const Task = ({ title, status = false }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={isVisible ? GlobalStyles.task : GlobalStyles.taskModal}>

            <View style={{ paddingRight: 20 }}>
                <FontAwesome name="circle" size={30} color={status ? "#8DFE48" : "#FE9F48"} />
            </View>
            <View style={{ flex: 1, }}>
                <Text style={GlobalStyles.task_title}>{title}</Text>
                <Text style={GlobalStyles.small}>Subitule</Text>
            </View>
            <View style={{ height: "60%", alignItems: "flex-end" }}>
                <TouchableHighlight onPress={() => setIsVisible(true)}>
                    <MaterialCommunityIcons name="dots-vertical" color="white" size={23} />
                </TouchableHighlight>
            </View>
            <ModalBottomHalf show={isVisible} setShow={setIsVisible} title={title} />
        </View >
    )
};

export default Task;