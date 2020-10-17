import React, { useEffect, useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect, useSelector } from 'react-redux';
import { PhotoContainer } from './PhotoContainer/PhotoContainer';
import { getUsersData } from './../../redux/reducers/photosReducer';
import { set_photo } from './../../redux/reducers/FullSizePhotoScreenReduecer';
import { AppLoader } from './../../loaders/loader';

const Photos = ({ photos, getUsersData, navigation, set_photo, isLoading }) => {
    const [page, setPage] = useState(1);

    useEffect(() => {
        getUsersData(page);
    }, []);

    const loadMorePhotos = () => {
        setPage(page + 1);
        getUsersData(page + 1);
    }

    if (photos.length === 0) {
        return <AppLoader ></AppLoader>
    }

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.wrapper}
            >
                {photos.map(photo => <PhotoContainer
                    key={photo.id}
                    photo={photo}
                    navigation={navigation}
                    set_photo={set_photo}
                />)}
                {isLoading
                    ? <View style={styles.loadingWrapper}>
                        <AppLoader />
                    </View>
                    : <View style={styles.more_photos_wrapper}>
                        <View style={styles.more_photos_btn}>
                            <Button
                                onPress={loadMorePhotos}
                                title={"Загрузить еще"} />
                        </View>
                    </View>}
            </ScrollView>
        </View>
    )
}


const MapStateToProps = (state) => ({
    photos: state.photosPage.photos,
    isLoading: state.photosPage.isLoading,
});

export let PhotosContainer = connect(MapStateToProps, {
    getUsersData,
    set_photo
})(Photos)

PhotosContainer.navigationOptions = {
    headerShown: false
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    wrapper: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20
    },
    more_photos_wrapper: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    more_photos_btn: {
        width: 200,
    },
    loadingWrapper: {
        height: 40,
        width: '100%'
    }
})


