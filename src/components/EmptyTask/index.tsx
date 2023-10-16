import {View, Text} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"

import DefaultColors from '../../Styles/colors';
import { styles } from "./styles";

export function EmptyTask(){
    return(
        <View style={styles.container}>
            <Icon name="clipboard-outline" size={80} color={DefaultColors["gray-400"]}/>
            <View style={styles.textContainer}>
                <Text style={styles.textUp}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.textDown}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
      </View>
    )
}