import React, {useState, useRef} from 'react';

import {StyleSheet} from 'react-native';
import propTypes from 'prop-types';
import {Pressable, Text} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';

const Capsule = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 20;
  const capsuleWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <Pressable
      style={[
        styles.capsule,
        props.isInactive && styles.inactiveCapsule,
        capsuleWidth,
      ]}
      onPress={() => props.onPress(props.categoryId)}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[styles.title, props.isInactive && styles.inactiveTitle]}>
        {props.title}
      </Text>
    </Pressable>
  );
};

Capsule.defaultProps = {
  isInactive: false,
  onPress: () => {},
};

Capsule.propTypes = {
  categoryId: propTypes.number.isRequired,
  filterId: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  isInactive: propTypes.bool,
  onPress: propTypes.func,
};

const styles = StyleSheet.create({
  capsule: {
    backgroundColor: '#2979F2',
    height: verticalScale(40),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  inactiveCapsule: {
    backgroundColor: '#F3F5F9',
  },

  title: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(17),
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  inactiveTitle: {
    color: '#79869F',
  },
});

export default Capsule;
