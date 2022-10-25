import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import SortIcon from '../../assets/icons/sort.svg';
import DoneIcon from '../../assets/icons/task-done.svg';
import InProcessIcon from '../../assets/icons/in-progress.svg';
import CancelIcon from '../../assets/icons/cancel.svg';
import { THEME } from '../theme/theme';

export const BottomPanel = (props) => {
  const {sortType, onChangeSortType, filterType, onChangeFilterType} = props;

  const sortTypeHandler = (type) => {
    if (sortType === 'asc' && type === 'asc') {
      onChangeSortType('desc');
    } else onChangeSortType(type);
  };

  const filterTypeHandler = (type) => {
    onChangeFilterType(type);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => sortTypeHandler('asc')}>
        <SortIcon
          width={40}
          height={40}
          fill={sortType === 'asc' || sortType === 'desc'
            ? THEME.COLOR_ORANGE
            : THEME.COLOR_DARK_GRAY
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => filterTypeHandler('done')}>
        <DoneIcon
          width={40}
          height={40}
          fill={filterType === 'done'
            ? THEME.COLOR_ORANGE
            : THEME.COLOR_DARK_GRAY
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => filterTypeHandler('inProcess')} >
        <InProcessIcon
          width={40}
          height={40}
          fill={filterType === 'inProcess'
            ? THEME.COLOR_ORANGE
            : THEME.COLOR_DARK_GRAY
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        sortTypeHandler(null);
        filterTypeHandler(null);
      }}>
        <CancelIcon
          width={40}
          height={40}
          fill={ THEME.COLOR_DARK_GRAY }
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,

  },
});
