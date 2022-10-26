import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { THEME } from '../theme/theme';

export const Loader = (props) => (
  <View style={{...styles.container, ...props.style}}>
    <ActivityIndicator size="large" color={THEME.COLOR_RED} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
});
