import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking
} from 'react-native';
import { Divider } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { EvilIcons, Octicons, AntDesign } from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';

function MyDivider({ padding }) {
  return (
    <View style={{ paddingVertical: padding || 15 }}>
      <Divider style={{ height: 2 }} />
    </View>
  );
}

class MyCarousel extends Component {
  state = {
    entries: [
      <Image source={require('../assets/images/c1.png')} style={styles.carouselImage} />,
      <Image source={require('../assets/images/c2.png')} style={styles.carouselImage} />,
      <Image source={require('../assets/images/c3.png')} style={styles.carouselImage} />,
      <Image source={require('../assets/images/c4.png')} style={styles.carouselImage} />
    ]
  }

  _renderItem({ item }) {
    return (
      <View style={styles.slide}>
        {item}
      </View>
    );
  }

  render() {
    return (
      <Carousel
        ref={(c) => { this._carousel = c; }}
        data={this.state.entries}
        renderItem={this._renderItem}
        sliderWidth={360}
        itemWidth={360}
        autoplay={true}
        loop={true}
        lockScrollWhileSnapping={true}
      />
    );
  }
}

export default function HomeScreen() {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.nameContainer}>
        <Image
          source={require('../assets/images/ENname.png')}
          style={styles.nameImage}
        />
        <Image
          source={require('../assets/images/CNname.png')}
          style={styles.nameImage}
        />
      </View>

      <View style={{ alignItems: 'center' }}>
        <MonoText style={{ fontSize: 16 }}>Department of Mathematics</MonoText>
      </View>

      <MyDivider />

      <View style={{ backgroundColor: '#efefef' }}>
        <MonoText style={{ fontSize: 20 }}>"All problems in mathematics are psychological."</MonoText>
      </View>
      <View style={{ paddingTop: 10 }}>
        <MonoText>-- Pierre Deligne</MonoText>
      </View>

      <MyDivider />

      <MyCarousel />

      <MyDivider />

      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 2 }}>
          <Image source={require('../assets/images/me.png')} style={{ resizeMode: 'contain', width: '100%' }} />
          <MyDivider />
          <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
            <AntDesign name="github" color="grey" size={30} onPress={() => Linking.openURL('https://github.com/Waerden001')} />
            <AntDesign name="linkedin-square" color="grey" size={30} onPress={() => Linking.openURL('https://github.com/Waerden001')} />
            <AntDesign name="facebook-square" color="grey" size={30} onPress={() => Linking.openURL('https://www.facebook.com/people/Shuai-Wang/100010022234709')} />
            <AntDesign name="instagram" color="grey" size={30} onPress={() => Linking.openURL('https://www.instagram.com/shuai_wang000')} />
          </View>

        </View>
        <View style={{ paddingLeft: 15, flex: 5 }}>
          <MonoText style={{ paddingBottom: 10 }}>
            I am a fifth-year Ph.D student in the
            <Text onPress={() => Linking.openURL('https://www.math.columbia.edu')} style={{ color: 'blue' }}> Department of Mathematics<EvilIcons name="external-link" color="blue" /> </Text>
            at Columbia University in the City of New York, under the supervision of Professor
            <Text onPress={() => Linking.openURL('http://www.math.columbia.edu/~okounkov')} style={{ color: 'blue' }}> Andrei Okounkov<EvilIcons name="external-link" color="blue" /></Text>
            . I got my bachelor's degree in mathematics from Peking University in 2015.
          </MonoText>
          <MonoText style={{ paddingBottom: 10 }}>I'm maily interested in algebraic geometry and representation theory.</MonoText>
          <MonoText style={{ paddingBottom: 10 }}>Besides mathematics, I love boxing and playing the guitar.</MonoText>
          <MonoText style={{ paddingBottom: 10 }}>See full <MonoText style={{ color: 'blue' }} onPress={() => Linking.openURL('https://www.math.columbia.edu/~tedd2013/files/CV_SWang.pdf')}>CV here. <Octicons name="file-symlink-file" size={16} /></MonoText></MonoText>
          <MonoText>Email: sw3028@columbia.edu</MonoText>
        </View>
      </View>

      <MyDivider />


    </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  main: {
    padding: 20
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20
  },
  nameImage: {
    height: 38,
    width: '40%',
    resizeMode: 'contain'
  },
  carouselImage: {
    height: 200,
    width: 350,
    resizeMode: 'contain'
  },
  headImage: {
    flex: 2,

  }
});
