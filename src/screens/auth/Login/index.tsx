import React, {useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import Button from '../../../components/Button';
import {connect} from 'react-redux';
import {IReduxState} from './../../../redux/reducer/index';
import {LogIn} from './../../../redux/actions/auth';

interface ILoginProps {
  LogIn: Function;
}

const Login = (props: ILoginProps) => {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>();
  const [pass, setPass] = useState<string>();

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
          change={(text: string) => setEmail(text)}
          title={'Email Address'}
          placeholder={' abc@gmail.com '}
        />

        <TextField
          change={(text: string) => setPass(text)}
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

        {/* <View style={styles.signinButton}>
      <TouchableOpacity onPress={()=>navigation.navigate("Choice")}>
          <Text style={styles.signinText}> SIGN IN </Text>
        </TouchableOpacity>
      </View> */}
        <Button
          type="fill"
          title="LOG IN"
          onPress={() => {
            props.LogIn({email: email, password: pass, props: props});
            console.log('>>>>>>>>>>>>>>', props.LogIn);
            // navigation.navigate('Choice');
          }}
        />
      </View>
    </SafeAreaView>
  );
};
const mapStateToProps = (state: IReduxState) => ({
  login_data: state.auth.loginData,
});

export default connect(mapStateToProps, {LogIn})(Login);
