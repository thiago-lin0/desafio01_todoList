import { StyleSheet } from "react-native";

import DefaultColors from "../../Styles/colors";

export const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        padding: 40
    },
    textContainer:{
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    textUp:{
        color: DefaultColors["gray-300"],
        fontSize: 16,
        fontWeight: "bold"
    },
    textDown:{
        color: DefaultColors["gray-300"],
        fontSize: 16,
    }
})