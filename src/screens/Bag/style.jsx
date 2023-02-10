import { StyleSheet } from 'react-native';

import Colors from '../../global/style'

const styles = StyleSheet.create({
    container: {
        marginLeft: 18,
        marginRight: 18,
        marginTop: 18,
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        textAlign: "center",
        padding: 15,
        color: Colors.blackColor
    },
    img: {
        left: 10,
        width: 90,
        height: 70,
        position: "absolute",
        top: 32,
    },
    produto: {
        display: "flex",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 16,
        marginBottom: 18,
    },
    button1: {
        alignItems: "center",
        width: 38,
        height: 38,
        padding: 10,
        backgroundColor: Colors.grayText,
        color: Colors.grayColor,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },
    button2: {
        alignItems: "center",
        width: 38,
        height: 38,
        padding: 10,
        backgroundColor: Colors.primaryColor,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4
    },
    textBtt: {
        fontWeight: "bold",
        fontSize: 18,
        top: -6,
    },
    quant: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        left: 240,
        top: 28
    },
    count: {
        fontSize: 22,
        color: Colors.primaryColor,
        marginLeft: 14,
        marginRight: 14,
    },
    colorBtt2: {
        color: Colors.whiteColor
    },
    describle: {
        flexDirection: "column",
        left: 110
    },
    input: {
        height: 50,
        width: 272,
        marginRight: 14,
        borderWidth: 1,
        padding: 15,
        borderRadius: 3,
        borderColor: Colors.primaryColor,
        marginBottom: 12
    },
    local: {
        backgroundColor: Colors.whiteColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderRadius: 6,
        marginBottom: 16
    }
});
export default styles;