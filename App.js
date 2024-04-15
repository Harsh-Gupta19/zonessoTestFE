import { StyleSheet, SafeAreaView, Platform, ScrollView } from 'react-native';
import Vehicles from './components/Vehicles';
import Home from './components/Home';
import Login from './components/Login';
import HeaderRight from './components/HeaderRight';
import HeaderLeft from './components/HeaderLeft';
import VehicleDetails from './components/VehicleDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {



  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>

        <Stack.Navigator initialRouteName='Login' screenOptions={{}}>

          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} options={{
            headerTitle: "Home",
            headerLeft: () => <HeaderLeft display={false} />,
            headerRight: () => <HeaderRight display={false} />
          }} />

          <Stack.Screen name="Vehicles" component={Vehicles} options={{
            //headerLeft: () => <HeaderLeft display={false}/>,
            headerRight: () => <HeaderRight display={false} />
          }} />
          <Stack.Screen name="VehicleDetails" component={VehicleDetails} options={{
            //headerLeft: () => <HeaderLeft display={false}/>,
            //headerRight: () => <HeaderRight display={false} />
          }} />
        </Stack.Navigator>

      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'f5f5f5',
    //paddingTop: Platform.OS === "android" ? 26 : 0
  },
});
