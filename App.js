import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

export default function App() {

  const[product, setProduct] = useState('');
  const [productList, setProductList] = useState([]);

  const addProduct = () => {
    setProductList([...productList, {key: product}])
    setProduct("");
  };

  const clearAll = () => {
    setProductList([]);
  };


  return (
    <View style={styles.container}>
      <TextInput
        style={{width: 200, borderColor: 'gray', borderWidth: 1}}
        value={product}
        onChangeText={text => setProduct(text)}
        />

      <View style={{flexDirection: 'row',
            alignItems: 'center'}}>
      <Button title='ADD' onPress={addProduct}/>
      <Button title='CLEAR' onPress={clearAll}/>
      </View>
      <Text style={{fontSize: 16, margin: 11}}>Shopping List</Text>
      <FlatList style={styles.list}
        data={productList}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 100,
  },
});
