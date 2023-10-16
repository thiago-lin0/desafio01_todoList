
import { View, Text } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { styles } from "./style"
import DefaultColors from "../../Styles/colors";

export function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Icon name="rocket-launch" size={50} color={DefaultColors.blue} />
                <Text style={styles.textTo}>to</Text><Text style={styles.textDo}>do</Text>
            </View>
        </View>
    )
}