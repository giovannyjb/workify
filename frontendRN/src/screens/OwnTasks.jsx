import { Text, View } from "react-native"
import GlobalStyles from "../utils/GlobalStyles"

export const OwnTasks = () => {
    return (
        <View style={GlobalStyles.screens}>
            <View style={GlobalStyles.container}>
                <View style={GlobalStyles.view}>
                    <Text style={GlobalStyles.title}>My Tasks screen</Text>
                </View>
            </View>
        </View >
    )
}
