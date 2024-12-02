import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  ImageBackground,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import background from '../../assets/images/bg-welcome.png';
import colors from '../../constants/colors';
import fontWeight from '../../constants/font-weight';
import { TRootStackParamList } from '../../types/navigation';

type WelComeScreenProps = NativeStackScreenProps<
  TRootStackParamList,
  'Welcome'
>;

const WelComeScreen = ({
  navigation,
}: WelComeScreenProps): React.JSX.Element => {
  return (
    <ImageBackground style={backgroundStyle} source={background}>
      <View style={contentStyle}>
        <View>
          <Text style={titleStyle}>EXPLORA</Text>
          <Text style={subtitleStyle}>- if not now, when? - </Text>
        </View>

        <TouchableOpacity
          style={buttonStyle}
          onPress={() => navigation.navigate('Home')}>
          <Text style={textButtonStyle}>Start</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const backgroundStyle: ViewStyle = {
  flex: 1,
  width: '100%',
};

const contentStyle: ViewStyle = {
  width: '100%',
  height: '45%',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 50,
};

const buttonStyle: ViewStyle = {
  backgroundColor: colors.primary,
  paddingVertical: 10,
  paddingHorizontal: 30,
  alignSelf: 'center',
  borderRadius: 20,
  shadowColor: colors.steelBlue,
  shadowOpacity: 25,
  shadowOffset: { width: 0, height: 7 },
  shadowRadius: 14,
  width: 200,
  alignItems: 'center',
  justifyContent: 'center',
};

const titleStyle: TextStyle = {
  fontWeight: fontWeight.bold,
  fontSize: 40,
  color: colors.primary,
  textTransform: 'uppercase',
};

const subtitleStyle: TextStyle = {
  fontWeight: fontWeight.normal,
  fontSize: 16,
  textTransform: 'uppercase',
  color: colors.primary,
};

const textButtonStyle: TextStyle = {
  fontSize: 20,
  fontWeight: fontWeight.semibold,
  color: colors.white,
  textTransform: 'uppercase',
};

export default WelComeScreen;
