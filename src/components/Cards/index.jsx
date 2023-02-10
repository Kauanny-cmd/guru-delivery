import { View, Text, Image } from 'react-native';

import styles from './style';

const Cards = ({ type, name, price, colorText, img }) => {
    return (
        <View style={styles.container} >
            <View style={styles.bottom} >
                <Text style={{ fontSize: 10 }}>{type}</Text>
                <Text style={{ fontSize: 14, fontWeight: "700" }}>{name}</Text>
                <Text style={{ fontSize: 14, color: colorText, fontWeight: "400" }}>{price}</Text>
            </View>
            <View style={styles.top} />
            <Image source={img} style={styles.Img} />
        </View>
    )
};
export default Cards;