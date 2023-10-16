import { StyleSheet } from "react-native";

import DefaultColors from "../../Styles/colors";

export const styles = StyleSheet.create({
    content:{
        alignItems:"center",
        marginBottom: 10
    },
    container:{
        width: "85%",
        height: 70,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        paddingHorizontal: 20,
        backgroundColor: DefaultColors["gray-500"],
        borderRadius: 10
    },
    checkBox:{
        borderRadius: 20,
        marginRight: 10,
    },
    textContainer:{
        flex:1
    },
    taskText:{
        color: DefaultColors["gray-100"],
        fontSize: 14,
    },
    taskTextChecked:{
        color: DefaultColors["gray-300"],
        textDecorationLine: "line-through",
        fontSize: 14,
    },
    icon:{
        marginLeft: 10
    }
})