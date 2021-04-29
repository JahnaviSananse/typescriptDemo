import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import TextField from '../../../components/TextField';
import styles from './style';
import Button from '../../../components/Button';
import { connect } from 'react-redux';
import { SignUp } from '../../../redux/actions/auth';

const Login = (props : any) => {
  const navigation = useNavigation();

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
        title={'Full Name'}
        placeholder={'Enter Your Name '}
      />
       
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
          onPress={()=>navigation.navigate("Login")}>
          <Text style={styles.forgotPass}> Already have an Account ? </Text>
        </TouchableOpacity>
      </View>

      <Button
          type="fill"
          title=" SIGN IN"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
    </View>
    </SafeAreaView>
  )
};



export default connect(null,{
  SignUp,
})(Login);