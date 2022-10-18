import { StyleSheet } from "react-native";

//font sizes: 18, 20, 24, 36,

export default StyleSheet.create({
    screens: {
        backgroundColor: "#242424",
        height: "100%",
    },
    container: {
        maxWidth: 430,
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
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
    view: {
        paddingVertical: 20
    },
    line: {
        color: "#454545"
    },
    blockRow: {
        display: "flex",
        flexDirection: "row",
        paddingVertical: 40,
        alignItems: "center",
        justifyContent: "space-evenly",

    },
    blockCol: {
        display: "flex",
        width: "100%"
    },
    date: {
        textAlign: "center",
        paddingVertical: 8,
        backgroundColor: "#FFE600",
        width: 160,
        minWidth: 160,
        color: "#242424",
        fontWeight: "bold",
        fontSize: 20,
        borderRadius: 100,
    },

    subtitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },
    task: {
        marginVertical: 20,
        backgroundColor: "#FFE600",
        width: "100%"
    }

});