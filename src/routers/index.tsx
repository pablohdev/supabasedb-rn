import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import ListContact from '../pages/ListContact';
import NewContact from '../pages/NewContact';

const Stack = createStackNavigator();

const Routers: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListContact"
        component={ListContact}
        options={({navigation}) => ({
          title: 'Lista de Contatos',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('NewContact')}>
              <Text>New </Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="NewContact"
        component={NewContact}
        options={{title: 'Adicionar novo Contato'}}
      />
    </Stack.Navigator>
  );
};

export default Routers;
