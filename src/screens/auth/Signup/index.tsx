import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import TextField from '../../../components/TextField';
import styles from './style';
import Button from '../../../components/Button';
import {connect} from 'react-redux';
import {SignUp} from '../../../redux/actions/auth';

interface ISignupProps {
  SignUp: Function;
}

const Login = (props: ISignupProps) => {
  const navigation = useNavigation();
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<any>();
  const [pass, setPass] = useState<any>();

  return (
    <SafeAreaView style={styles.container}>
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
          change={(text: any) => setName(text)}
          title={'Full Name'}
          placeholder={'Enter Your Name '}
        />

        <TextField
          change={(text: any) => setEmail(text)}
          title={'Email Address'}
          placeholder={' abc@gmail.com '}
        />

        <TextField
          change={(text: any) => setPass(text)}
          title={'Password'}
          placeholder={' Enter Here '}
        />

        <View style={styles.touchableView}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.forgotPass}> Already have an Account ? </Text>
          </TouchableOpacity>
        </View>

        <Button
          type="fill"
          title=" SIGN IN"
          onPress={() => {
            props.SignUp({name: name, email: email, password: pass});
            navigation.navigate('Login');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default connect(null, {
  SignUp,
})(Login);
