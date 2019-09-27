import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Linking
} from 'react-native';
import { Divider } from 'react-native-elements';
import { EvilIcons } from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';

export default function SettingsScreen() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <MonoText>Not implement yet</MonoText>
    </ScrollView>
  );

}

SettingsScreen.navigationOptions = {
  header: null
};
