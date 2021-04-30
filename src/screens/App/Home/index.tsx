import React, {useEffect, useState, useCallback} from 'react';
import {FlatList, Text, View, Image} from 'react-native';
import {connect} from 'react-redux';
import {DataList} from '../../../redux/actions/post';
import styles from '../Home/styles';

const Home = (props: any) => {
  useEffect(() => {
    props.DataList();
  }, []);
  const renderDataList = ({item}: any) => {
    return (
      <>
        <View style={{marginLeft: '10%'}}>
          {console.log('hbchjvdcyjsdvchjsdc', item)}
          <Text style={styles.emailText}> {item.email}</Text>
          <Text> {item.id}</Text>
          <Text> {item.name}</Text>
          {/* <Image style={styles.img} source={{uri: item.avatar}} /> */}
        </View>
        <View style={styles.borderView}></View>
      </>
    );
  };
  return <FlatList data={props.dataFetch} renderItem={renderDataList} />;
};

const mapStateToProps = (state: any) => ({
  dataFetch: state.post.dataRespones,
});

export default connect(mapStateToProps, {DataList})(Home);
