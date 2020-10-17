import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { set_photo } from './../../redux/reducers/FullSizePhotoScreenReduecer';

const screenWidth = Math.round(Dimensions.get('window').width);
console.log(screenWidth);

let PhotoScreen = ({ navigation, photo }) => {
    const goBack = () => {
        navigation.navigate('Gallery');
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.author_name_wrapper}>
                    <Text style={styles.author_name}>Author: ${photo.user.name}</Text>
                    <TouchableHighlight
                        onPress={goBack}
                        underlayColor="#dddddd">
                        <Text style={styles.close_btn}>Close</Text>
                    </TouchableHighlight>
                </View>
                <View style={{
                    height: (screenWidth * photo.heightToWidthRatio) - 20,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                }}>
                    <Image
                        style={styles.photo}
                        source={{ uri: photo.urls.regular }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const MapStateToProps = (state) => ({
    photo: state.FullSizePhotoPage.photo
});

export let FullSizePhotoScreen = connect(MapStateToProps, {
    set_photo
})(PhotoScreen)

FullSizePhotoScreen.navigationOptions = {
    headerShown: false
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    },
    wrapper: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    photo: {
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    author_name_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    author_name: {
        marginVertical: 10,
        paddingHorizontal: 10
    },
    close_btn: {
        padding: 10
    }
})