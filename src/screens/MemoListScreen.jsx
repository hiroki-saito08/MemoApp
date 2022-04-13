import React from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';

import firebase from 'firebase';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
// import LogOutButton from '../components/LogOutButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const handlePress = () => {
    firebase.auth().signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'LogIn' }],
        });
      })
      .catch(() => {
        Alert.alert('ログアウトに失敗しました');
      });
  };

  return (
    <View style={styles.container}>
      <MemoList />
      <CircleButton
        name="plus"
        onPress={() => { navigation.navigate('MemoCreate'); }}
      />
      <TouchableOpacity
        onPress={handlePress}
        style={{
          paddingHorizontal: 12,
          paddingVertical: 4,
          backgroundColor: '#467fd3',
          width: 100,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: 'rgba( 255, 255, 255, 0.7)',
          }}
        >
          ログアウト
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
