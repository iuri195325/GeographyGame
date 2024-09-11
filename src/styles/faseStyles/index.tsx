import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      marginTop: 30,
      backgroundColor: '#060F20'
    },
    map: {
        marginTop: 35,
        width: 300,
        height: 300,
    },
    row: {
        margin: 0,
        alignItems: 'center',
        justifyContent:'space-between',
    },
    column:{
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        marginTop: '10%', 
        alignItems: 'center',
        borderRadius: 40,
        height: '87%'
    },
    image: {
        width: 40,
        height: 40,
        margin: 0,
        marginLeft: 10
    }
  });