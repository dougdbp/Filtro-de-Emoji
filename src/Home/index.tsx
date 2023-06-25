import { View } from 'react-native';
import { Camera } from 'expo-camera';

import { styles } from './styles';
import { useEffect } from 'react';

export function Home() {
    const [permission, requestPermission] = Camera.useCameraPermissions();

    useEffect(() => {
        requestPermission()
    },[]);

    if(!permission?.granted) {
        return;
    }

  return (
    <View style={styles.container}>
        <Camera style={styles.camera} />
    </View>
  );
}