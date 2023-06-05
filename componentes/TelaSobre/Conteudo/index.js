import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './estilo';

const CustomComponent = ({ imageSource, title, text }) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default CustomComponent;
