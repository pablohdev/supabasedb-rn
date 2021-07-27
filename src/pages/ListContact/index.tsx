import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import ContactItemList from '../../components/ContactItemList';
import ListDivider from '../../components/ListDivider';

import styles from './styles';

interface Contact {
  id: string;
  name: string;
  email: string;
}

const ListContact: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: 'asd6as01das5d45as1d0as1d2',
      name: 'Pablo Henrique ',
      email: 'pablohdev@outlook.com',
    },
    {
      id: 'aksdnajsdasd2d3a0s54dasad4a',
      name: 'Ismael Santos',
      email: 'ismaelsantos@gmail.com',
    },
  ]);

  return (
    <View style={styles.Container}>
      <FlatList
        data={contacts}
        renderItem={ContactItemList}
        ItemSeparatorComponent={() => <ListDivider />}
      />
    </View>
  );
};

export default ListContact;
