import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './Style';
import {items} from '../Data/Data';
import {RenderItem} from './RenderItem';

const GridView = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>Available Cars</Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => (
          <RenderItem item={item} navigation={navigation} />
        )}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={{paddingHorizontal: 10}}
      />
    </View>
  );
};

export default React.memo(GridView);
