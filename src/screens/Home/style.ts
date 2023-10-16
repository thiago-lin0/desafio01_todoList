import { StyleSheet} from 'react-native';

import DefaultColors from '../../Styles/colors';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: DefaultColors['gray-600'],
    },
    taskTypeConteiner:{
      flexDirection: "row",
      marginTop: 80,
      alignItems: 'center',
      justifyContent: "space-between",
      paddingHorizontal: 35,
      marginBottom: 35,
    },  
    divider: {
      marginHorizontal: 30,
      borderBottomColor: DefaultColors['gray-300'],
      borderBottomWidth: 1,       
      marginVertical: 10,        
      borderRadius:5
    },
  });
  