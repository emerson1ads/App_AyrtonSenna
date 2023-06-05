import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 2
    },
    image: {
      width:100,
      height: 100,
      marginRight: 10,
    },
    content: {
      flex: 1,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    text: {
      fontSize: 14,
    },
  });

  export default styles;