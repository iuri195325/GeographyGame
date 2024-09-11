import { StyleSheet } from 'react-native';
import { Constants } from '../../Constants';

export const styles = StyleSheet.create({
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