import { View, Text } from 'react-native'
import MapView from 'react-native-maps';
import GlobalStyles from '../utils/GlobalStyles';

const Map = () => {
    return (
        <View style={GlobalStyles.mapContainer}>
            <MapView style={GlobalStyles.map} />
        </View>
    )
}

export default Map;