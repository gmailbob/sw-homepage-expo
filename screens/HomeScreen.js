import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Divider } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
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
    <View style={styles.main}>
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
        <Image
          source={require('../assets/images/me.png')}
          style={styles.headImage}
        />
        <View style={{ paddingLeft: 15, flex: 5 }}>
          <MonoText>I am a fifth-year Ph.D student in the Department of Mathematics at Columbia University in the City of New York, under the supervision of Professor Andrei Okounkov. I got my bachelor's degree in mathematics from Peking University in 2015.</MonoText>
          <MonoText>I'm maily interested in algebraic geometry and representation theory.</MonoText>
          <MonoText>Besides mathematics, I love boxing and playing the guitar.</MonoText>
          <MonoText>Email: "sw3028" at columbia dot edu</MonoText>
        </View>
      </View>

    </View>
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
    resizeMode: 'contain'
  }
});
