import { StyleSheet } from "react-native";


const StyleLoginSuccess = StyleSheet.create({
    container: {
        top:156,
        left: 148,
        position: 'absolute',
    },
    card:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
        width: 360,
        borderRadius: 8,
        backgroundColor:"#EDEDED",
        marginTop:-60,
},
    cardImage :{
        height:100,
        width:100,
        borderRadius:50,
        flex: 0.75,
        marginLeft: 12,
        marginRight: 8,
        marginTop: 12,
        marginBottom: 12,
        emoji : {
            fontSize: 52,
            fontFamily: 'Segoe UI Emoji',
            textAlign:"center",
            marginTop: 12,
        }
    },
    cardContent:{
        flex: 2
    },
    cardText:{
        fontSize: 24,
        fontWeight: 700,
    },
    cardPhone:{
        fontSize:16
    },
    titleMain:{
        left: 20,
        top: -88,
        marginBottom:12,
        textAlign:"center",
        maxWidth:260
    }
})

export default StyleLoginSuccess