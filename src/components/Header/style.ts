import { StyleSheet } from "react-native";
import DefaultColors from "../../Styles/colors";
export const styles = StyleSheet.create({
    container:{
        backgroundColor: DefaultColors["gray-700"],
    },
    textContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 70,
    },
    textTo:{
        fontSize: 50,
        color: DefaultColors.blue,
        fontWeight: "900",

    },
    textDo:{
        fontSize: 50,
        color: DefaultColors["purple-dark"],
        fontWeight: "900"

    }
})