import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './Style';
import {items} from '../Data/Data';
import {RenderItem} from './RenderItem';

const ListView = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>Available Cars</Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <RenderItem item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default ListView;
