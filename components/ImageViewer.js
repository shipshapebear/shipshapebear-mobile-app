import React from "react";
import { StyleSheet, Image } from "react-native";

const ImageViewer = ({ placeholderImage, selectedImage }) => {
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImage;
  return <Image source={imageSource} style={styles.image} />;
};

export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    width: 330,
    height: 440,
    borderRadius: 18,
    resizeMode: "contain",
  },
});
