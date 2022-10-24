import { StyleSheet } from "react-native";

//font sizes: 18, 20, 24, 36,

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#242424",
        width: "100%",
        paddingHorizontal: 26,
    },
    paragraph: {
        color: "#B9B9BE",
        fontWeight: "normal",
        fontSize: 20,
    },

    title: {
        color: "white",
        fontSize: 36,
        fontWeight: "bold",
    },
    line: {
        color: "#454545"
    },
    blockRow: {
        display: "flex",
        flexDirection: "row",
        paddingVertical: 30,
        justifyContent: "flex-end"
    },
    date: {
        textAlign: "center",
        paddingVertical: 15,
        backgroundColor: "#FFE600",
        width: 150,
        minWidth: 150,
        color: "#242424",
        fontWeight: "bold",
        fontSize: 16,
        borderRadius: 100,
    },
    subtitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },
    small: {
        color: "#AEAEB3",
        fontSize: 14,
    },
    task_title: {
        fontFamily: "interSemibold",
        color: "white",
        fontSize: 14,
        alignSelf: "flex-start",
    },
    task: {
        alignItems: "center",
        justifyContent: "space-between",
        padding: 30,
        flex: 3,
        flexDirection: "row",
        borderRadius: 25,
        width: "100%"
    },
    taskModal: {
        alignItems: "center",
        justifyContent: "space-between",
        padding: 30,
        flex: 3,
        flexDirection: "row",
        borderRadius: 25,
        width: "100%",

    },
    modalContent: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        width: "100%",
        bottom: 0,
        position: "absolute",
        height: "60%",
        backgroundColor: "white",
        padding: 35,
        alignItems: "center",
        elevation: 10,

    },
    modalContainer: {
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)"

    }

});