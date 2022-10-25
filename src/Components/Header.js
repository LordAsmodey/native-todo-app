import React from 'react';
import { View, StyleSheet } from 'react-native';
import { THEME } from '../theme/theme';
import { AppTextBold } from './ui/AppTextBold';
import { Loader } from './Loader';

export const Header = ({ isLoading }) => {
  return (
    <View style={styles.header}>
      {isLoading
        ? <Loader/>
        : <AppTextBold>Todo List</AppTextBold>
      }
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
