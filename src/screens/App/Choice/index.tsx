import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {SafeAreaView, View} from 'react-native';
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
          title=" Post Data"
          onPress={() => {
            navigation.navigate('Post');
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
