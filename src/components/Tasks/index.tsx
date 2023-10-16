import { Text, View } from "react-native"
import Checkbox from 'expo-checkbox';
import Icon from "react-native-vector-icons/FontAwesome"

import DefaultColors from "../../Styles/colors";
import { styles } from "./styles";


interface TaskProps{
    id: number;
    selected: boolean;
    valueChange: (id:number) => void;
    trashChange: () => void;
    taskText: string;
}

export function Tasks(props: TaskProps){
    return(
        <View style={styles.content}>
            <View style={styles.container}>
                <Checkbox
                    style={styles.checkBox}
                    value={props.selected}
                    onValueChange={() => props.valueChange(props.id)}
                    color={props.selected?DefaultColors["purple-dark"]:DefaultColors.blue}
                />
                <View style={styles.textContainer}>
                    <Text style={props.selected ? styles.taskTextChecked : styles.taskText}>{props.taskText}</Text>
                </View>
                <Icon style={styles.icon} name="trash-o" size={20} color={DefaultColors["gray-300"]} onPress={props.trashChange}/>
            </View>
        </View>
    )
}