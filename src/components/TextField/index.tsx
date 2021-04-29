import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from '../TextField/style';

interface ITextFieldProps {
  value: string;
  placeholder: string;
  title: string;
  change: any;
}

const TextField = (props: ITextFieldProps) => {
  const {value, placeholder, title, change} = props;

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.placeholderText}>{title}</Text>
      <View style={styles.extraPaddingDarkBorder}>
        <TextInput
          style={styles.textInput}
          onChangeText={change}
          value={value}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};
export default TextField;
