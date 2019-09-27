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

function PaperLink({ link, text }) {
  return (
    <MonoText
      style={{ color: '#5b7eab', fontSize: 15 }}
      onPress={() => link && Linking.openURL(link)}
    >
      <EvilIcons name="external-link" size={15} />{` ${text}`}
    </MonoText>
  );
}

export default function LinksScreen() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <MonoText style={{ fontSize: 22 }}>Preprints</MonoText>
      <Divider style={{ height: 2 }} />
      <View style={{ paddingVertical: 13 }}>
        <PaperLink
          link='https://www.math.columbia.edu/~tedd2013/files/relativeGW.pdf'
          text='Relative Gromov-Witten theory and vertex operators (draft)' />
        <PaperLink
          link='https://www.math.columbia.edu/~tedd2013/files/kazhdanlusztig.pdf'
          text='Non-recursive formula for Kazhdan-Lusztig polynomials for finite and affine G/P (draft)' />
      </View>

      <MonoText style={{ fontSize: 22 }}>Expository notes</MonoText>
      <Divider style={{ height: 2 }} />
      <View style={{ paddingVertical: 13 }}>
        <PaperLink text='Examples and counterexamples in elementary algebraic geometry' />
        <PaperLink text='Project Fourier' />
        <PaperLink text='Perverse sheaves, derived category and the decomposition theorem' />
        <PaperLink text='A short proof of the Kodaira vanishing theorem' />
      </View>

      <MonoText style={{ fontSize: 22 }}>Hand-written notes</MonoText>
      <Divider style={{ height: 2 }} />
      <View style={{ paddingVertical: 13 }}>
        <PaperLink text='Coming soon' />
      </View>

      <MonoText style={{ fontSize: 22 }}>{'Software & Program'}</MonoText>
      <Divider style={{ height: 2 }} />
      <View style={{ paddingVertical: 13 }}>
        <MonoText style={{ fontSize: 15 }}>{'\u2022 '}
          <Text style={{ color: 'blue' }} >Wallace Chaser<EvilIcons name="external-link" color="blue" /> </Text>
          is a simple 3D game demo based on XNA. Note that this game is built with XNA, so if you aren't able to play it, you may need to download the
          <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://www.microsoft.com/en-us/download/details.aspx?id=20914')} > XNA 4.0 Redistributable<EvilIcons name="external-link" color="blue" /></Text>
          .</MonoText>
      </View>

      <MonoText style={{ fontSize: 22 }}>Science Honor Program</MonoText>
      <Divider style={{ height: 2 }} />
      <View style={{ paddingVertical: 13 }}>
        <MonoText>Not implement yet</MonoText>
      </View>

    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
});
