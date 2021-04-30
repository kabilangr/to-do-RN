import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const ListItems = ({ item , deleteItem }) => {

return (
      <TouchableOpacity style={styles.listItems}>
         <View style={styles.listItemView}>
            <Text style={styles.listItemText}>{item.text}</Text>
            <Text name="remove" style={styles.delete} onPress={() => deleteItem(item.id)}>X</Text>
         </View>
     </TouchableOpacity> 
);
};
const styles = StyleSheet.create({
    listItems: {
        padding: 15,
        backgroundColor: "#f8f8f8",
        borderBottomWidth: 1,
        borderColor: "#eee",
    },
    listItemView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    listItemText: {
        fontSize: 18,
    },
    delete: {
        fontSize: 20,
        color: "firebrick",
    },
});

export default ListItems;