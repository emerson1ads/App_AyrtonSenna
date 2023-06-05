import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome } from '@expo/vector-icons';

import Inicio from './componentes/TelaInicio/index';
import Sobre from './componentes/TelaSobre/index';
import Vitorias from './componentes/TelaVitorias/index';

const Navigacao = createBottomTabNavigator();

const app = () => {
  return(
    <NavigationContainer>
      <Navigacao.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#eecb01',
          height: 100
        },
        headerTitleStyle:{
          fontSize:24,
          fontWeight: '700'
        },
        tabBarInactiveTintColor: '#000',
        tabBarActiveTintColor: '#FF0000',
        tabBarStyle: {
          backgroundColor: '#eecb01',
          height: 60
        },
        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: "bold",
        },
        tabBarActiveBackgroundColor: '#fff',
      }}>
        <Navigacao.Screen
          name='Inicio' 
          component = {Inicio}
          options={{
            tabBarIcon: ({color}) => (
              <Entypo name="home" size={20} color={color} />
            ),
          }}
          />
        <Navigacao.Screen 
          name='Sobre' 
          component = {Sobre}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome name="question-circle-o" size={20} color={color} />
            )
          }}
          />
        <Navigacao.Screen 
          name='Vitórias' 
          component = {Vitorias}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome name="trophy" size={20} color={color} />
            )
          }}
          />
      </Navigacao.Navigator>
    </NavigationContainer>
  );
}

export default app;