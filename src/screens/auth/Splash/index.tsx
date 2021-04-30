import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {SafeAreaView, Image} from 'react-native';
import styles from '../Splash/style';
const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Signup');
    }, 2000);
  }, []);
  return (
    <SafeAreaView>
      <Image
        style={styles.tinyLogo}
        source={require('../../../assets/images/computer.jpg')}
      />
    </SafeAreaView>
  );
};

export default Splash;
