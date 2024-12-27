import {Text} from 'react-native-paper';
import {Container, StyledButton} from '../../styles/QrCode/QrAreaStyles';
import {CommonActions, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import { View, Image } from 'react-native';
const Stack = createNativeStackNavigator();
const QRArea = () => {
  const navigation = useNavigation()
  function navegar() {
    navigation.navigate('QR', {});
  }
  return (
    <Container>
      <View>
        <Image source={require('../../../assets/img/image.png')} style={{width: 90, height:120}}/>
      </View>
      <StyledButton mode="contained" onPress={navegar}>
        <Text
          style={{
            color: '#fff',
          }}>
          Escanear QR Code
        </Text>
      </StyledButton>
    </Container>
  );
};

export default QRArea;
