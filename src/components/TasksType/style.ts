import { StyleSheet } from "react-native";

import DefaultColors from "../../Styles/colors";

export const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        marginBottom: 10,
        alignItems: "center"
    },
    containerCount:{
        width: 30,
        height: 19,
        backgroundColor: DefaultColors["gray-400"],
        marginLeft: 5,
        borderRadius:10,
        alignItems: "center",
        justifyContent: "center",
    },
    textConter:{
        color: DefaultColors["gray-100"],
        fontWeight: "bold",
    }
})