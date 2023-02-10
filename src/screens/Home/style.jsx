import { StyleSheet } from 'react-native';
import Colors from '../../global/style'

const styles = StyleSheet.create({
    container: {
        height: 162,
        flexDirection: "row",
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        overflow: "hidden"
    },
    quadrado: {
        flex: 2,
        backgroundColor: Colors.whiteColor,
        padding: 14,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    lateral: {
        flex: 1,
        backgroundColor: Colors.primaryColor,
        borderRadius: 8,
    },
    promoText: {
        fontSize: 10,
        backgroundColor: Colors.primaryColor,
        padding: 5,
        borderRadius: 4,
        color: Colors.whiteColor,
        width: 60
    },
    Img: {
        width: 140,
        height: 140,
        position: "absolute",
        left: 195
    },
    Img2: {
        width: 160,
        height: 160,
        position: "absolute",
        left: 245
    },
    produtos: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignContent: "space-between",
    },

});

export default styles;