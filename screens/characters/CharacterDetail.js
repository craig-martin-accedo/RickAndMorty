import React from 'react';

import {SafeAreaView, ScrollView, StyleSheet, Text, Image} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import {
  horizontalScale,
  verticalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';
import BackButton from '../../component/BackButton/BackButton';
import Header from '../../component/Header/Header';

function CharacterDetail({route, navigation}) {
  // Get the params
  const {character} = route.params;
  console.log(character);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image source={{uri: character.image}} style={styles.image} />
        <Header type={1} title={character.name} />
        <Text style={styles.description}>Species: {character.species}</Text>
        <Text style={styles.description}>Gender: {character.gender}</Text>
        <Text style={styles.description}>Status: {character.status}</Text>
        <Text style={styles.description}>
          Location: {character.location.name}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(7),
  },
  image: {
    marginTop: verticalScale(12),
    marginBottom: verticalScale(24),
    width: '100%',
    height: verticalScale(240),
    borderRadius: horizontalScale(10),
  },
  description: {
    marginTop: verticalScale(7),
    marginHorizontal: horizontalScale(7),
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(22),
  },
});

export default CharacterDetail;
