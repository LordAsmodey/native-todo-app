import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const Loader = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#46adf6" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});
