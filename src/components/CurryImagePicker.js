import { View, Text, Image, Button, StyleSheet} from 'react-native'
import { useState, useEffect, useContext } from 'react';
import React from 'react'
import * as ImagePicker from "expo-image-picker";
import { PracticeContext } from '../../context/PracticeContext';
import ImageViewer from './ImageViewer';

const CurryImagePicker = () => {

    const {selectedImage, setSelectedImage} = useContext(PracticeContext);
    
    const PlaceholderImage = ''; //ruta de prueba para probar ImagePicker

    const pickImageAsync = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      } else {
        alert('You did not select any image.');
      }
      
    };
  
    return (
    <View style={styles.container}>
      <View style = {styles.imageContainer}>
      <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
        <View style={styles.button}>
            <Button title="Elegir Imagen" onPress={pickImageAsync}/>
        </View>
    </View>
  )
}

export default CurryImagePicker;

const styles = StyleSheet.create({
    container:{
        width: '100%',
        alignItems: 'center',
        
    },
    imageContainer:{
        borderWidth:1,
        borderColor: 'black',
        width:'80%',
        height: 180,
        backgroundColor:'#eee',
    },
    button:{
        margin:8
    }
   
})