import {StyleSheet } from 'react-native';

import Colors from '../..//global/style'

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        fontSize: 24, 
        fontWeight: "600",
        textAlign:"center",
        margin:20,
        color:'#fff',
    },
    top: {
        flex: 1,
        backgroundColor: Colors.primaryColor,
        justifyContent:"center",
        alignItems:"center",
        alignContent:"space-between",
    },
    img:{
        width: 250,
        height: 210,
    },
    bottom: {
        flex: 2,
        backgroundColor: "#fff",
        padding: 18,
        flexDirection: "column",
        justifyContent:"space-between"
    },
    button1:{
        alignItems: "center",
        width:48,
        height:48,
        padding: 10,
        backgroundColor: Colors.whiteColor,
        color:"#313030",
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },
    button2:{
        alignItems: "center",
        width:48,
        height:48,
        padding: 10,
        backgroundColor:  Colors.primaryColor,
        color:"#313030",
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4
    },
    textBtt:{
        fontWeight:"500",
        fontSize:24,
        top:-2,
        color: Colors.grayText,
    },
    colorBtt2:{
        color: Colors.whiteColor
    },
    quant:{
        marginTop: 20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
});

export default styles;