import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.logo}>MyApp</Text>
      <View style={styles.links}>
        <Text style={styles.link}>Home</Text>
        <Text style={styles.link}>Sobre</Text>
        <Text style={styles.link}>Contato</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0866FF',
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
