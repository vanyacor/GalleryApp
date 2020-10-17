
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { PhotosContainer } from './../components/PhotosContainer/PhotosContainer';
import { FullSizePhotoScreen } from './../components/FullSizePhotoScreen/FullSizePhotoScreen';


const Navigator = createStackNavigator({
    Gallery: {
        screen: PhotosContainer,
    },
    FullSizePhoto: {
        screen: FullSizePhotoScreen
    }
},
    {
        initialRouteName: 'Gallery',
    }
);
export const AppNavigation = createAppContainer(Navigator);