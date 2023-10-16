import { Pressable } from "react-native"
import { TextInput, View, Text } from "react-native"
import Icon from "react-native-vector-icons/AntDesign"


import { styles } from "./style"
import DefaultColors from "../../Styles/colors"
interface InputProps{
    taskName: string;
    changeText: (text: string) => void
    sendTask: () => void
}
export function Input(props: InputProps){
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChange={text => props.changeText(text.nativeEvent.text)}
                value={props.taskName}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor={DefaultColors["gray-300"]}
            /> 
            <Pressable 
                onPress={props.sendTask}
                style={({pressed}) => [
                {
                  backgroundColor: pressed ? DefaultColors.blue : DefaultColors["blue-dark"],
                },
                styles.wrapperCustom,
                ]}>
                    <Icon name="pluscircleo" size={25} color={DefaultColors["gray-100"]}/>
            </Pressable>
        </View>
    )
}