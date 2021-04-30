import React, {useState} from 'react';
import {View , StyleSheet, FlatList, Alert, AsyncStorage} from 'react-native';
import Header from './component/Header';
import ListItems from './component/ListItems';
import AddItem from './component/AddItem';

const App = () =>{
  const [items, setItems] =  useState([]);

  const deleteItem = (id) => {
    setItems(previousItem => {
      return previousItem.filter(item => item.id != id);
    });
  };

  const addItem = (text) => {
      if(!text){
          Alert.alert("error", "Please Enter an item", [{ text: "Ok" }]);
        }
      else{
          setItems(previousItem => {
            return [...previousItem,{id: previousItem.length, text}];
        });
    }
  };


  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({item}) => <ListItems item={item} deleteItem={deleteItem} />} />
    </View>
  );
};


const styles =  StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 60,
  },
});

export default App;