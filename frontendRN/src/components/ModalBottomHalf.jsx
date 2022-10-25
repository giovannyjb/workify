import { Alert, Modal, Pressable, Text, View } from "react-native";
import GlobalStyles from "../utils/GlobalStyles";

const ModalBottomHalf = ({ show, setShow, title }) => {

    return (
        <Modal
            statusBarTranslucent={true}
            animationType="none"
            transparent={true}
            visible={show}
            onRequestClose={() => setShow(!show)}
        >
            <View style={GlobalStyles.modalContainer}>
                <View style={GlobalStyles.modalContent}>
                    <Text>{title}</Text>
                    <Pressable onPress={() => setShow(!show)}                >
                        <Text>Hide Modal</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default ModalBottomHalf;