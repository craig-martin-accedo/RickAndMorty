import React from 'react';

import {View, Text} from 'react-native';
import propTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {scaleFontSize} from '../../assets/styles/scaling';

const Header = props => {
  const styleToApply = () => {
    switch (props.type) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
      default:
        return style.title1;
    }
  };
  return (
    <View>
      <Text
        style={[styleToApply(), props.color && {color: props.color}]}
        numberOfLines={props.numberOfLines ? props.numberOfLines : null}>
        {props.title}
      </Text>
    </View>
  );
};

Header.default = {
  title: '',
  type: 1,
  color: '#000000',
};

Header.propTypes = {
  title: propTypes.string,
  type: propTypes.number,
  color: propTypes.string,
  numberOfLines: propTypes.number,
};

const style = StyleSheet.create({
  title1: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
    fontWeight: '600',
  },
  title2: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(22),
    fontWeight: '600',
  },
  title3: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    fontWeight: '600',
  },
});

export default Header;
