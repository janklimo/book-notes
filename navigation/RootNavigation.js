import React, {
  PropTypes
} from 'react';
import { StyleSheet, View } from 'react-native';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@exponent/ex-navigation';
import {
  FontAwesome,
} from '@exponent/vector-icons';

import Alerts from '../constants/Alerts';
import Colors from '../constants/Colors';
import Router from './Router';

const renderIcon = (name, isSelected) => {
  return (
    <FontAwesome
      name={name}
      size={32}
      color={isSelected ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
};

export default RootNavigation = () => {
  return (
    <TabNavigation
      tabBarHeight={56}
      initialTab="home">
      <TabNavigationItem
        id="home"
        renderIcon={isSelected => renderIcon('home', isSelected)}>
        <StackNavigation initialRoute={Router.getRoute('home')} />
      </TabNavigationItem>

      <TabNavigationItem
        id="notes"
        renderIcon={isSelected => renderIcon('book', isSelected)}>
        <StackNavigation initialRoute={Router.getRoute('notes')} />
      </TabNavigationItem>

      <TabNavigationItem
        id="settings"
        renderIcon={isSelected => renderIcon('star', isSelected)}>
        <StackNavigation initialRoute={Router.getRoute('settings')} />
      </TabNavigationItem>
    </TabNavigation>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  selectedTab: {
    color: Colors.tabIconSelected,
  },
});
