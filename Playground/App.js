import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Total from "./Total";

export default function App() {
  const [numSandwiches, setNumSandwiches] = useState(0);
  const [numWater, setNumWater] = useState(0);

  const sandwichPrice = 5;
  console.log("app reloading!!");
  const addSandwich = () => { console.log("adding sandwich!!");
    setNumSandwiches(numSandwiches => numSandwiches + 1);
  }

  const addWater = () => { console.log('adding water');
    setNumWater(numWater => numWater + 1);
  }
  
  const getTotal = useCallback(() => {
    console.log('calculating total!');
    return numSandwiches * sandwichPrice;
  }, [numSandwiches]);

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>

        <Text style={styles.label}>{ "Sandwiches: " + numSandwiches }</Text>
        <Button title="Add sandwich" onPress={addSandwich} />        

        <Text style={styles.label}>{ "Water: " + numWater }</Text>
        <Button title="Add water" onPress={addWater} />

        <Total getTotal={getTotal} />

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
