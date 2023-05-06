import { StyleSheet } from "react-native";


const StyleLoginSuccess = StyleSheet.create({
    container: {
        top:156,
        left: 136,
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
        height:60,
        // width:10,
        borderRadius:30,
        flex: 1,
        margin: 12,
    },
    cardContent:{
        flex: 2
    },
    cardText:{
        fontSize: 20,
        fontWeight: 700,
    },
    cardPhone:{
        fontSize:16
    },
    titleMain:{
        left: 20,
        top: -88,
        marginBottom:12
    }
})

export default StyleLoginSuccess