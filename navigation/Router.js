import { createRouter } from '@exponent/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import NotesScreen from '../screens/NotesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  home: () => HomeScreen,
  notes: () => NotesScreen,
  settings: () => SettingsScreen,
  rootNavigation: () => RootNavigation,
}));
