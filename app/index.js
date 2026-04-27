// app/index.js
// Point d'entrée : navigation principale de l'application MediBook
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Colors } from '../constants/colors';

// Import de tous les écrans depuis leurs fichiers dédiés
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import AppointmentsScreen from '../screens/AppointmentsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen';
let test = 'string';
console.log(test);

const Tab = createBottomTabNavigator();

// ─── Composant pour afficher l'icône d'un onglet ───
function TabIcon({ emoji, focused, badge }) {
  return (
    <View style={{ alignItems: 'center', width: 50 }}>
      {/* Badge de notification */}
      {badge ? (
        <View
          style={{
            position: 'absolute',
            top: -4,
            right: 4,
            backgroundColor: '#ef4444',
            borderRadius: 10,
            minWidth: 18,
            height: 18,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 4,
            zIndex: 1,
          }}
        >
          <Text
            style={{
              color: Colors.white,
              fontSize: 10,
              fontWeight: 'bold',
            }}
          >
            {badge}
          </Text>
        </View>
      ) : null}

      <Text
        style={{
          fontSize: focused ? 26 : 22,
        }}
      >
        {emoji}
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationIndependentTree>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: Colors.primary,
              tabBarInactiveTintColor: Colors.textLight,
              tabBarLabelStyle: {
                fontSize: 11,
                fontWeight: '600',
                marginBottom: 4,
              },
              tabBarStyle: {
                backgroundColor: Colors.white,
                borderTopWidth: 1,
                borderTopColor: Colors.divider,
                paddingTop: 8,
                height: 70,
              },
            }}
          >
            <Tab.Screen
              name="Accueil"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ focused }) => <TabIcon emoji="🏠" focused={focused} />,
              }}
            />

            <Tab.Screen
              name="Rechercher"
              component={SearchScreen}
              options={{
                tabBarIcon: ({ focused }) => <TabIcon emoji="🔍" focused={focused} />,
              }}
            />

            <Tab.Screen
              name="RDV"
              component={AppointmentsScreen}
              options={{
                tabBarIcon: ({ focused }) => <TabIcon emoji="📅" focused={focused} />,
              }}
            />

            <Tab.Screen
              name="Messages"
              component={MessagesScreen}
              options={{
                tabBarIcon: ({ focused }) => <TabIcon emoji="💬" focused={focused} badge={2} />,
              }}
            />

            <Tab.Screen
              name="Profil"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({ focused }) => <TabIcon emoji="👤" focused={focused} />,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </NavigationIndependentTree>
    </SafeAreaProvider>
  );
}
// Testing Husky pre-commit hook
// Testing Husky pre-commit hook
