import React from 'react';

import {Image, View, Pressable, StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';
import Header from '../Header/Header';

import propTypes from 'prop-types';

const CharacterCell = ({title, characterId, uri, onPress}) => {
  return (
    <Pressable style={styles.cell} onPress={onPress}>
      <Image resizeMode="cover" source={{uri: uri}} style={styles.image} />
      <Header title={title} type={2} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: verticalScale(12),
    marginBottom: verticalScale(0),
    width: '100%',
    height: verticalScale(180),
    borderRadius: horizontalScale(10),
  },
  cell: {
    // backgroundColor: 'blue',
    // alignSelf: 'stretch',
  },
});

CharacterCell.defaultProps = {
  onPress: () => {},
};

CharacterCell.propTypes = {
  title: propTypes.string.isRequired,
  uri: propTypes.string.isRequired,
  characterId: propTypes.string.isRequired,
  onPress: propTypes.func,
};

export default CharacterCell;
