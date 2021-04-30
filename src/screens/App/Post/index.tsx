import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {DataList, DataPost} from '../../../redux/actions/post';
import styles from './style';
import TextField from '../../../components/TextField/index';
import Button from '../../../components/Button';

const Post = (props: any) => {
  const [item, setItem] = useState('');
  const [job, setJob] = useState('');
  useEffect(() => {
    props.DataList(item);
  }, []);

  return (
    <>
      <TextField
        value={item}
        change={(text: any) => setItem(text)}
        placeholder={'id'}
      />

      <TextField
        value={job}
        change={(text: any) => setJob(text)}
        placeholder={'name'}
      />

      <View style={styles.buttonView}>
        <Button
          title=" Post Data"
          onPress={() => {
            props.DataPost({name: item, job: job});
            setItem(' ');
            setJob(' ');
          }}
        />
      </View>
      {props.dataGet
        ? props.dataGet.map((value: any, index: any) => {
            return (
              <View style={styles.backgroundView}>
                <Text key={index} style={styles.textFormat}>
                  {'Name : ' + value.name + '\n' + 'ID : ' + value.id}
                </Text>
                <View style={styles.borderView}></View>
              </View>
            );
          })
        : null}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  dataGet: state.post.dataRespones,
});

export default connect(mapStateToProps, {DataList, DataPost})(Post);
