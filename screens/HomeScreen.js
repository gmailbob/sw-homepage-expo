import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {

  return (
    <View style={styles.main}>
      <View style={styles.nameContainer}>
        <View style={styles.singleNameContainer}>
          <Image
            source={require('../assets/images/ENname.png')}
            style={styles.nameImage}
          />
        </View>
        <View style={styles.singleNameContainer}>
          <Image
            source={require('../assets/images/CNname.png')}
            style={styles.nameImage}
          />
        </View>
      </View>

      <View style={styles.departmentContainer}>
        <MonoText style={styles.departmentText}>Department of Mathematics</MonoText>
      </View>


    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  main: {
    padding: 20
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20
  },
  singleNameContainer: {
    width: '45%'
  },
  nameImage: {
    width: '100%',
    height: 70,
    resizeMode: 'contain'
  },
  departmentContainer: {
    alignItems: 'center',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  departmentText: {
    fontSize: 18
  }
});
