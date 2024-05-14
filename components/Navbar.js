import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.logo}>Itaú</Text>
      <View style={styles.links}>
      <Icon name="user-circle-o" size={30} color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F0500C',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  links: {
    flexDirection: 'row',
  },
  link: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 20,
  },
 
});

export default NavBar;
