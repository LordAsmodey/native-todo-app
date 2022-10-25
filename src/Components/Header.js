import React from 'react';
import { View, StyleSheet } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { THEME } from '../theme/theme';
import { AppTextBold } from './ui/AppTextBold';
import { Loader } from './Loader';

export const Header = ({ isLoading }) => {
  return (
    <View style={styles.header}>
      {isLoading
        ? <Loader style={{alignItems: 'center'}}/>
        : (
          <MaskedView
            style={styles.maskContainer}
            maskElement={
              <View style={styles.maskView}>
                <AppTextBold style={styles.text}>Todo List</AppTextBold>
              </View>
            }>
            <View style={{
              flex: 1,
              height: '100%',
              backgroundColor: THEME.COLOR_ORANGE }}
            />
            <View style={{
              flex: 1,
              height: '100%',
              backgroundColor: THEME.COLOR_RED }}
            />
          </MaskedView>
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  header : {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: THEME.COLOR_BLUE,
    paddingBottom: 8,
    marginBottom: 16,
  },
  text: {
    fontSize: 22,
  },
  maskContainer: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    alignItems: 'flex-end',
  },
  maskView: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});
