import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Characters from '../screens/characters/Characters';
import CharacterDetail from '../screens/characters/CharacterDetail';
import Episodes from '../screens/episodes/Episodes';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faUsers} from '@fortawesome/free-solid-svg-icons';
import {faTv} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

const CharacterStack = createNativeStackNavigator();

function CharacterStackScreen() {
  return (
    <CharacterStack.Navigator screenOptions={{header: () => null}}>
      <CharacterStack.Screen name="CharacterList" component={Characters} />
      <CharacterStack.Screen
        name="CharacterDetail"
        component={CharacterDetail}
      />
    </CharacterStack.Navigator>
  );
}

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Characters') {
            iconName = focused ? faUser : faUsers;
          } else if (route.name === 'Episodes') {
            iconName = focused ? faTv : faTv;
          }
          return <FontAwesomeIcon icon={iconName} />;
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Characters" component={CharacterStackScreen} />
      <Tab.Screen name="Episodes" component={Episodes} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
