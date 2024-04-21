import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Style';

const Main = ({navigation}) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => navigation.navigate('GridView')}
        style={styles.button}>
        <Text style={styles.text}>Grid View</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ListView')}
        style={styles.button}>
        <Text style={styles.text}>List View</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
