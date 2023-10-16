import { Text, View } from "react-native"


import { styles } from "./style";

interface TaskTypeProps{
    name:  string;
    color: string;
    number: number;
}
export function TaskType(props: TaskTypeProps){
    return(
        <View style={styles.container}>
            <Text style={{color: props.color, fontWeight: "bold", fontSize: 16}}>{props.name}</Text>
            <View style={styles.containerCount}>
                <Text style={styles.textConter}>{props.number}</Text>
            </View>
        </View>
    )
}