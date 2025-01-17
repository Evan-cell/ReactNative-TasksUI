import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default function Task ({text}) {
  {
    return (
      <View style={styles.item}>
        <View style={styles.itemLeft}>
            <TouchableOpacity style={styles.square}></TouchableOpacity>
            <Text style={styles.itemTexts}>{text}</Text>
        </View>
        <View style={styles.circular}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
item:{
    backgroundColor:'#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom: 20,

},
itemLeft:{
flexDirection: 'row',
alignItems:'center',
flexWrap:'wrap'
},
square:{
    width:24,
    height:24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight:15,
},
itemTexts:{
    maxWidth:'80%'
},
circular:{
    width:12,
    height:12,
    borderColor:"#55BCFC",
    borderWidth:2,
    borderRadius:5,
},
})