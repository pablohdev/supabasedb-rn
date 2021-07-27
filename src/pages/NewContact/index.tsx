import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import styles from './styles';

const NewContact: React.FC = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSaveContact = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.Container}>
      <View style={styles.Row}>
        <Text>Novo Contatos</Text>
      </View>

      <View style={styles.Row}>
        <Input placeholder="Nome" value={name} onChangeText={setName} />
      </View>

      <View style={styles.Row}>
        <Input placeholder="Email" value={email} onChangeText={setEmail} />
      </View>

      <View style={styles.Row}>
        <Button text="Salvar" onPress={handleSaveContact} />
      </View>
    </View>
  );
};

export default NewContact;
