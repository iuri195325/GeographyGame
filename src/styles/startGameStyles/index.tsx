import { StyleSheet } from 'react-native';
import { Constants } from '../../Constants';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#060F20'
    },
    column: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    image:{
      marginBottom: '30%'
    },
    buttonStyle: {
      borderWidth: 1,
      borderColor: Constants.black,
      borderRadius: 10,
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
    }
  });