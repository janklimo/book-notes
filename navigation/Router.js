import { createRouter } from '@exponent/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import NotesScreenContainer from '../containers/notes';
import SettingsScreen from '../screens/SettingsScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  home: () => HomeScreen,
  notes: () => NotesScreenContainer,
  settings: () => SettingsScreen,
  rootNavigation: () => RootNavigation,
}));
