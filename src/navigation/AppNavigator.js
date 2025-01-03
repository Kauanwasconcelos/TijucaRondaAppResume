import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PaperProvider} from 'react-native-paper';
import {ThemeProvider} from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import theme from '../theme/theme';
import ScreenTeste from '../screens/ScreenTeste';
import QrCodeScreen from '../screens/QrCodeScreen';
import CustomHeader from '../navigation/CustomHeader'; // Importe o CustomHeader

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (e) {
        console.error('Erro ao verificar o status de login:', e);
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  if (isLoggedIn === null) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Login'}>
            <Stack.Group
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Teste" component={ScreenTeste} />
              <Stack.Screen name="Login" component={HomeScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen
                name="QR"
                component={QrCodeScreen}
                options={({navigation}) => ({
                  headerShown: true,
                  header: () => (
                    <CustomHeader
                      title="Escanear QR-Code"
                      onBackPress={() => navigation.goBack()}
                      headerShown={true}
                    />
                  ),
                })}
              />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
}
