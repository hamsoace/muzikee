import React from 'react';
import { Text, View } from 'react-native';
import { AlbumProps } from '../Album';
import styles from '../Album/styles';

export type AlbumCategoryProps = {
    title: string,
    albums: [{
        id: string;
        imageUri:string;
        artistHeadline: string;
    }]
}

const AlbumCategory = (props: AlbumProps) => (
    <View style={styles.container}>
        <Image source={{uri: props.album.imageUri}} style={styles.image}/>
        <Text style={styles.text}>{props.album.artistsHeadline}</Text>
    </View>
)

export default AlbumCategory;
