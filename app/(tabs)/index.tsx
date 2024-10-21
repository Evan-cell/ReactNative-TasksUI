import { Image, StyleSheet,View,Text, Platform } from 'react-native';
import Task  from '@/components/Task'
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          <Task text='task 1'/>
          <Task text='task 2'/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"#E8EAED"
},
textWrapper:{
  paddingTop: 80,
  paddingHorizontal: 20,
},
sectionTitle:{
  fontSize: 24,
  fontWeight: 'bold',

},
items:{
  marginTop:30,
}
});
