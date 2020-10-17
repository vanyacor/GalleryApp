import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Navbar } from './src/components/Navbar/Navbar';
import { store } from './src/redux/redux-store';
import { AppNavigation } from './src/Navigation/AppNavigation';


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.main_wrapper}>
        <StatusBar style="auto" />
        <Navbar />
        <AppNavigation />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  main_wrapper: {
    flex: 1
  },
});
