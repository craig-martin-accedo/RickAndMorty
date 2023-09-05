import React from 'react';
import {Pressable} from 'react-native';
import propTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';

const BackButton = props => {
  return (
    <Pressable onPress={() => props.onPress()} style={styles.container}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
  );
};

BackButton.propTypes = {
  onPress: propTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    width: horizontalScale(44),
    height: horizontalScale(44),
    borderRadius: horizontalScale(26),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BackButton;
