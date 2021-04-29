import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  SafeAreaView,
  View,
} from 'react-native';
import styles from './style';
import Button from '../../../components/Button/index';

const Choice = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <Button
          title=" Get List"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
    
        <Button
          title="LOG OUT"
          onPress={() => {
           navigation.navigate('Login');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Choice;