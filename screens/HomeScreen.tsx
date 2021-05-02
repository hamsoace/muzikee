import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Album from '../components/Album';


const album={
  id: '1',
  imageUri: 'https://townsquare.media/site/812/files/2017/10/Migos-Motor-Sport.jpeg?w=1080&q=75',
  artistsHeadline : 'Nicki Minaj, Cardi B, Quavo, Migos'
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Album album={album}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    fontSize:20,
    fontWeight: 'bold',
  },
  separator:{
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});


