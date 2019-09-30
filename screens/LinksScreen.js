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
      style={{ color: '#5b7eab' }}
      onPress={() => link && Linking.openURL(link)}
    >
      <EvilIcons name="external-link" size={15} />{` ${text}`}
    </MonoText>
  );
}

function ExternalLink({ link, text }) {
  return <Text style={{ color: 'blue' }} onPress={() => link && Linking.openURL(link)} >{text}<EvilIcons name="external-link" color="blue" /></Text>;
}

function MyDivider({ padding }) {
  return (
    <View style={{ paddingVertical: padding || 15 }}>
      <Divider style={{ height: 2 }} />
    </View>
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
        <MonoText>{'  \u2022 '}
          <ExternalLink text='Wallace Chaser' />
          {' '}is a simple 3D game demo based on XNA. Note that this game is built with XNA, so if you aren't able to play it, you may need to download the
          <ExternalLink text=' XNA 4.0 Redistributable' link='https://www.microsoft.com/en-us/download/details.aspx?id=20914' />.</MonoText>
      </View>

      <MonoText style={{ fontSize: 22 }}>Science Honor Program</MonoText>
      <Divider style={{ height: 2 }} />
      <View style={{ paddingVertical: 13 }}>
        <MonoText style={{ paddingBottom: 8 }}><ExternalLink text='The Columbia University Science Honors Program (SHP)' link='http://www.columbia.edu/cu/shp/index.html' /> is a highly selective program for high school students who have a strong interest in the sciences and mathematics. The SHP holds classes at Columbia from 10:00 A.M. to 12:30 P.M. on Saturdays throughout the academic year. Courses are primarily in the physical, chemical, biological, behavioral, and computing sciences; and instructors are scientists and mathematicians who are actively engaged in research at the University.</MonoText>
        <MonoText style={{ paddingBottom: 8 }}>{'  \u2022 '}Representation theory of finite groups (Fall 2017), <MonoText style={{ fontWeight: 'bold' }}>Instructor: Shuai Wang</MonoText></MonoText>
        <MonoText>{'  \u2022 '}Representation theory of finite groups (Fall 2016), <MonoText style={{ fontWeight: 'bold' }}>Instructor: Shuai Wang</MonoText></MonoText>
      </View>

      <MonoText style={{ fontSize: 22 }}>Teaching</MonoText>
      <Divider style={{ height: 2 }} />
      <View style={{ paddingVertical: 13 }}>
        <MonoText style={{ paddingBottom: 8 }}>{'  \u2022 '}Math UN3952: Undergraduate seminar II, Music: A Mathematical Offering (Spring 2019), <MonoText style={{ fontWeight: 'bold' }}>Instructor: Shuai Wang</MonoText></MonoText>
        <MonoText style={{ paddingBottom: 8 }}>{'  \u2022 '}Math UN3951: Undergraduate seminar I, Some real world applications of pure mathematics (Spring 2018), <MonoText style={{ fontWeight: 'bold' }}>Instructor: Shuai Wang</MonoText></MonoText>
        <MonoText style={{ paddingBottom: 8 }}>{'  \u2022 '}Math UN1101:Calculus I (Summer 2018), <MonoText style={{ fontWeight: 'bold' }}>Instructor: Shuai Wang</MonoText></MonoText>
        <MonoText>{'  \u2022 '}Math UN1101: Calculus I (Fall 2017), <MonoText style={{ fontWeight: 'bold' }}>Instructor: Shuai Wang</MonoText></MonoText>
      </View>

      <MonoText style={{ fontSize: 22 }}>Teaching Assistant</MonoText>
      <Divider style={{ height: 2 }} />
      <View style={{ paddingVertical: 13 }}>
        <MonoText style={{ paddingBottom: 8 }}>{'  \u2022 '}Math GR6343: Lie groups and representations (Fall 2019, current), Instructor: Andrei Okounkov</MonoText>
        <MonoText style={{ paddingBottom: 8 }}>{'  \u2022 '}Math V2030: Ordinary differential equations (Fall 2018), Instructor: Kyler Siegel</MonoText>
        <MonoText style={{ paddingBottom: 8 }}>{'  \u2022 '}Math W4044: Representations of finite groups (Spring 2018), Instructor: Robert Friedman</MonoText>
        <MonoText style={{ paddingBottom: 8 }}>{'  \u2022 '}Math UN1208: Honor Math B (Spring 2017), Instructor: David Hansen</MonoText>
        <MonoText>{'  \u2022 '}Math UN1101: Calculus I (Fall 2016)</MonoText>
      </View>

      <MyDivider />

    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
});
