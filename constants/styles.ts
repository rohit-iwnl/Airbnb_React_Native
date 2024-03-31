import { StyleSheet } from "react-native"
import Colors from "./Colors"

export const defaultStyles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : "#fdffff",
    },

    inputField : {
        height : 44,
        borderWidth : 1,
        borderColor : '#ABABAB',
        borderRadius : 8,
        padding : 10,
        backgroundColor : "#fff"
    },
    footer: {
        position: 'absolute',
        height: 100,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopColor: Colors.dark,
        borderTopWidth: StyleSheet.hairlineWidth,
      },

    btn:{
        backgroundColor : Colors.primary,
        height:50,
        borderRadius: 8,
        justifyContent : 'center',
        alignItems : 'center'
    },
    btnText:{
        color : "#fff",
        fontSize: 16,
        fontFamily : 'poppins-sb'
    }

})