import React from 'react';
import { View, StyleSheet } from 'react-native';
import { THEME } from '../theme/theme';
import { AppTextBold } from './ui/AppTextBold';

export const Header = () => {
  return (
    <View style={styles.header}>
      <AppTextBold>Todo List</AppTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  header : {
    height: 60,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: THEME.COLOR_BLUE,
    paddingBottom: 8,
    marginBottom: 16,
  }
});
