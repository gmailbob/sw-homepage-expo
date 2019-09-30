import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  Linking,
  Modal,
  Button
} from 'react-native';
import { Divider } from 'react-native-elements';
import { EvilIcons } from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';

function MyDivider({ padding }) {
  return (
    <View style={{ paddingVertical: padding || 15 }}>
      <Divider style={{ height: 2 }} />
    </View>
  );
}

function ExternalLink({ link, text }) {
  return <Text style={{ color: 'blue' }} onPress={() => link && Linking.openURL(link)} >{text}<EvilIcons name="external-link" color="blue" /></Text>;
}

function SeminarItem({ date, speaker, title, detailInfo }) {
  const [modalVisible, toggleModal] = useState(false);
  return (
    <View>
      <MyDivider padding={10} />
      <MonoText>{date}</MonoText>
      <MonoText style={{ backgroundColor: '#ff5edc' }}>{speaker}</MonoText>
      {!detailInfo ?
        <MonoText >{title}</MonoText> :
        <View>
          <MonoText style={{ color: 'blue' }} onPress={() => toggleModal(true)}>{title}</MonoText>
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => toggleModal(false)}>
            <ScrollView style={{ padding: 35}}>
              <View>
                <MonoText>{detailInfo}</MonoText>
                <Button onPress={() => toggleModal(false)} title='Got it'/>
              </View>
              <MyDivider padding={20}/>
            </ScrollView>
          </Modal>
        </View>
      }
    </View>
  );
}

export default function SettingsScreen() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <MonoText style={{ fontSize: 22 }}>Student Enumerative Geometry Seminar</MonoText>
      <MyDivider />
      <View style={{ flexDirection: 'row' }}>
        <View style={{ borderRightColor: '#2574cf', borderRightWidth: 1, paddingRight: 5 }}><MonoText style={{ fontSize: 17, color: '#2574cf' }}>2017F</MonoText></View>
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <MonoText style={{ paddingBottom: 8 }}>In the Fall 2017 semester, Noah Arbesfeld, Henry Liu, Petr Pushkar and Shuai Wang organized a seminar on Enumerative Geometry. The main reference is Professor Andrei Okounkov's <ExternalLink text='Lectures on K-theoretic computations in enumerative geometry' link='https://arxiv.org/abs/1512.07363' />.</MonoText>
          <MonoText>If you're interested in counting, please check out the <ExternalLink text='seminar webpage' /> and join us!</MonoText>
          <View style={{ margin: 8, padding: 8, borderWidth: 1, borderRadius: 5, borderStyle: 'dashed', borderColor: 'grey' }}>
            <MonoText>The seminar meets at <MonoText style={{ fontWeight: 'bold' }}>2:30pm, Wednesdays in Mathematics Building Room 622.</MonoText> Every talk lasts around one and half hours and will be followed by dinner.</MonoText>
          </View>
          <MonoText style={{ fontWeight: 'bold' }}>Date, Speaker, Title:</MonoText>
          <SeminarItem date='September 13' speaker='Henry Liu' title='13/2 ways of counting curves.' />
          <SeminarItem date='September 20' speaker='Dimitry Korb' title='Donaldson-Thomas theory.' />
          <SeminarItem date='September 27' speaker='Shuai Wang' title='Curve counting via stable pairs' detailInfo='Curve counting via stable pairs in the derived category by R. Pandharipande, R. P. Thomas. For a nonsingular projective 3-fold $X$, we define integer invariants virtually enumerating pairs $(C,D)$ where $C\subset X$ is an embedded curve and $D\subset C$ is a divisor. A virtual class is constructed on the associated moduli space by viewing a pair as an object in the derived category of $X$. The resulting invariants are conjecturally equivalent, after universal transformations, to both the Gromov-Witten and DT theories of $X$. For Calabi-Yau 3-folds, the latter equivalence should be viewed as a wall-crossing formula in the derived category.
Several calculations of the new invariants are carried out. In the Fano case, the local contributions of nonsingular embedded curves are found. In the local toric Calabi-Yau case, a completely new form of the topological vertex is described.
The virtual enumeration of pairs is closely related to the geometry underlying the BPS state counts of Gopakumar and Vafa. We prove that our integrality predictions for Gromov-Witten invariants agree with the BPS integrality. Conversely, the BPS geometry imposes strong conditions on the enumeration of pairs.' />
          <SeminarItem date='October 4' speaker='Shuai Wang' title='Wall crossing, curve counting and Jacobi forms' />
          <SeminarItem date='October 11 (Tuesday 7pm)' speaker='Iakov Kononov' title='Equivariant vertex and topological strings' />
          <SeminarItem date='October 18' speaker='Ivan Danilenko' title='Equivariant quantum cohomology of cotangent bundle of G/P I' />
          <SeminarItem date='October 25' speaker='Ivan Danilenko' title='Equivariant quantum cohomology of cotangent bundle of G/P II' />
          <SeminarItem date='November 1' speaker='Noah Arbesfeld' title='The R-matrix from the Virasoro algebras I' detailInfo={`In his lectures, Vanya explained how to construct a geometric R-matrix using stable envelopes. I'll give another construction in the special case of instanton moduli space that uses the action of a certain Virasoro algebra on the cohomology of the Hilbert scheme of points on C^2 and explain why this construction coincides with the one we've already seen`}/>
          <SeminarItem date='November 8' speaker='Noah Arbesfeld' title='The R-matrix from the Virasoro algebras II' />
          <SeminarItem date='November 14' speaker='Postponed (no talk)' title='Postponed (no talk)' />
          <SeminarItem date='November 21' speaker='Thanksgiving (no talk)' title='Thanksgiving (no talk)' />
          <SeminarItem date='November 29' speaker='Dimitry Korb' title='Quasimaps I' />
          <SeminarItem date='December 6' speaker='Petr Pushkar' title='Quasimaps II' />
          <SeminarItem date='December 13' speaker='Renata Picciotto' title='Landau-Ginzburg/Calabi-Yau correspondence for Fermat quintic' />
        </View>
      </View>

      <MyDivider />

    </ScrollView>
  );

}

SettingsScreen.navigationOptions = {
  header: null
};
