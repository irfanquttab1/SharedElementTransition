import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {SharedElement} from 'react-navigation-shared-element';
import {styles} from './Style';
export const RenderItem = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detail', {item: item});
      }}>
      <View style={styles.card}>
        <SharedElement id={`image${item.id}`}>
          <Image
            alt=""
            resizeMode="cover"
            style={styles.cardImg}
            source={{uri: item.img}}
          />
        </SharedElement>

        <View style={styles.cardBody}>
          <View style={styles.cardHeader}>
            <SharedElement id={`name` + item.id}>
              <Text style={styles.cardTitle}>{item.name}</Text>
            </SharedElement>

            <SharedElement id={`price${item.id}`}>
              <Text style={styles.cardPrice}>
                ${item.price.toLocaleString('en-US')}
              </Text>
            </SharedElement>
          </View>

          <View style={styles.cardStats}>
            <View style={styles.cardStatsItem}>
              <FeatherIcon color="#48496c" name="zap" size={14} />

              <SharedElement id={`hp${item.id}`}>
                <Text style={styles.cardStatsItemText}>{item.hp} hp</Text>
              </SharedElement>
            </View>

            <View style={styles.cardStatsItem}>
              <FeatherIcon color="#48496c" name="navigation" size={14} />

              <SharedElement id={`miles${item.id}`}>
                <Text style={styles.cardStatsItemText}>
                  {item.miles.toLocaleString('en-US')} miles
                </Text>
              </SharedElement>
            </View>
          </View>

          <View style={styles.cardFooter}>
            <SharedElement id={`location${item.id}`}>
              <Text style={styles.cardFooterText}>{item.location}</Text>
            </SharedElement>
            <SharedElement id={`date${item.id}`}>
              <Text style={styles.cardFooterText}>{item.date}</Text>
            </SharedElement>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
