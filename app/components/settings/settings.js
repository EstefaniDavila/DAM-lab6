import React from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const ajustes = [
  {
    id: 1,
    name: 'Account',
    icon: 'user'
  },
  {
    id: 2,
    name: 'Notifications',
    icon: 'bells'
  },
  {
    id: 3,
    name: 'Appearance',
    icon: 'eyeo'
  },
  {
    id: 4,
    name: 'Privacy & Security',
    icon: 'lock1'
  },
  {
    id: 5,
    name: 'Help and Support',
    icon: 'customerservice'
  },
  {
    id: 6,
    name: 'About',
    icon: 'questioncircleo'
  },
]
const Item = ({ icon, name}) => {
    return (
    <TouchableOpacity>
        <View style={styles.item}>
          <Icon name={icon} size={23} style={{paddingTop: 12}}/>
          <Text style={styles.name}>{name}</Text>
          <View style={{flex: 1}}>
            <Icon name='right' style={styles.arrowItem} size={20}/></View>
        </View>
    </TouchableOpacity>
    );}
export default function settingsView() {
  const renderItem = ({item}) => (
        <Item icon={item.icon} name={item.name}/>
      );
  return(
    <SafeAreaView style={styles.container}>
      <FlatList
            data={ajustes}
            renderItem={renderItem}
            keyExtractor={item => item.id}/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: 'white',
      flexDirection: "row",
    },
    arrowItem: {
      alignSelf: 'flex-end',
      paddingTop: 10,
    },
    name: {
      fontSize: 20,
      paddingTop: 10,
      marginLeft: 5,
    },
  });