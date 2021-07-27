import React from 'react';
import {View, Text, ListRenderItem} from 'react-native';

interface Contact {
  id: string;
  name: string;
  email: string;
}

const ContactItemList: ListRenderItem<Contact> = info => {
  const {id, name, email} = info.item;

  return (
    <View style={{paddingHorizontal: 20, height: 60, flex: 1}}>
      <Text>Código: {id}</Text>
      <Text>Nome: {name}</Text>
      <Text>Email: {email}</Text>
    </View>
  );
};

export default ContactItemList;
