import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import TextField from '../../../components/TextField';
import styles from './style';

const Login = () => {
  return(
      <SafeAreaView  style={styles.container}>
      <View>
      <View>
      <View style={styles.headView}>
        <Image
          style={styles.img}
          source={require('../../../assets/images/computer.png')}
        />
      </View>
      
    </View>
       
      <TextField
        title={'Email Address'}
        placeholder={' abc@gmail.com '}
      />

      <TextField
        title={'Password'}
        placeholder={' Enter Here '}
      />

      <View style={styles.touchableView}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Alert', 'Forget Password ?');
          }}>
          <Text style={styles.forgotPass}> Forgot Password? </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signinButton}>
        <TouchableOpacity onPress={()=>alert("pressed")}>
          <Text style={styles.signinText}> SIGN IN </Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  )
};



export default Login;