import { StyleSheet } from 'react-native';
import Colors from '../../global/style'

const styles = StyleSheet.create({
    container: {
        height: 170,
        width: 170,
        flexDirection: "column-reverse",
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        marginTop: 20,

    }, top: {
        flex: 1,
        backgroundColor: Colors.whiteColor,
        padding: 14,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    },
    bottom: {
        flex: 1,
        backgroundColor: Colors.whiteColor,
        padding: 14,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        flexDirection: "column",
        justifyContent: "space-between"
    }, Img: {
        width: 100,
        height: 90,
        position: "absolute",
        top: 7,
        left: 38,
    },

});

export default styles;