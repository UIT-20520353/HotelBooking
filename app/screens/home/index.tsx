import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TRootStackParamList } from '../../types/navigation';

type HomeScreenProps = NativeStackScreenProps<TRootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeScreenProps): React.JSX.Element => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Bakc</Text>
      </TouchableOpacity>
      <Text>Home screen</Text>
    </View>
  );
};

export default HomeScreen;
