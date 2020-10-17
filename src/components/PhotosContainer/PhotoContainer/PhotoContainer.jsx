import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export const PhotoContainer = ({ photo, navigation, set_photo }) => {
    const goToFullSizePhoto = async () => {
        await set_photo(photo);
        navigation.navigate('FullSizePhoto');
    }
    return (
        <View style={styles.photoWrapper}>
            <TouchableOpacity onPress={goToFullSizePhoto}
                >
                <View style={styles.photo_container}>
                    <Image
                        style={styles.photo}
                        source={{ uri: photo.urls.small }}
                    />
                </View>
            </TouchableOpacity>
            <View style={styles.author_name}>
                <Text >Author: {photo.user.name}</Text>
            </View>
        </View>
    )
}

photo = {}
name = {}

const styles = StyleSheet.create({
    photoWrapper: {
        width: '48%',
        backgroundColor: '#ffffff',
        marginBottom: 10,
        borderRadius: 10,
    },
    photo_container: {
        height: 120,

        backgroundColor: '#dddddd',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    author_name: {
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    photo: {
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
})
