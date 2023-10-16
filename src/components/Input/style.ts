import { StyleSheet } from "react-native"
import DefaultColors from "../../Styles/colors"

export const styles = StyleSheet.create({
    container:{
        width:"100%",
        flexDirection: "row",
        position: "absolute",
        top:140,
        alignItems: "center",
        justifyContent: "center",
    },
    input:{
        width: "70%",
        backgroundColor: DefaultColors["gray-500"],
        padding: 16,
        color: DefaultColors["gray-100"],
        fontSize: 16,
        borderRadius: 5,
    },
    wrapperCustom:{
        width: 56,
        height: 56,
        marginLeft: 5,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    }
})