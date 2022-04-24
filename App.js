import React, {Component} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import gamesApp from "./app/components/gamesApp/gamesApp";
import { 
  Text, 
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";
const usuario = {
  name: 'tefa',
  password: 'tefa123'
}
function login({ navigation, name, password}) {
  const changeNameInput=(text)=>{
    name = text;
  }
  const changePassInput=(text)=>{
    password = text;
  }
  const showAlert = () =>{
    Alert.alert('Error', 'La contraseña o usuarios son incorrectos');
  }
  const onLogin = () =>{
    if (name == usuario.name && password == usuario.password){
      navigation.replace('App');
    }else{
      showAlert();
    }
  }
  return (
    <View style={styles.container}>
    <View style={styles.text}>
        <Image source={require('./app/img/mando.png')} style={styles.rexImages}/>
    </View>
    <Text>Usuario:</Text>
    <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => changeNameInput(text)}
        value={name}
    />
    <Text>Contraseña:</Text>
    <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => changePassInput(text)}
        value={password}
        secureTextEntry={true}
    />

    <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text> Iniciar Sesion </Text>
    </TouchableOpacity>
    <Text>Usuario: tefa</Text>
    <Text>Contrasena: tefa123</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      password: '',
    }
  }

  render(){
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="App" component={gamesApp} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>);
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    alignItems: 'center',
    padding: 10,
  },
  button: {
    top: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 20,
  },
  rexImages: {
    width: 250,
    height: 250,
  }
});