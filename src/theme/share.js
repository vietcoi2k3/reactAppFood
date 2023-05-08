import { Button, StyleSheet } from "react-native";
import { colors } from "../common/colors";

const shareCss =StyleSheet.create(
    {
        container: {
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
           
          },
          footerText: {
            textAlign: 'center',
            marginVertical: 10,
            bottom:0,
            color:"#3A3A3A",
            position: 'absolute',
            fontSize: 12,
            
          },
          input:{
            paddingTop:10,
            width:270,
            height:40,
            borderRadius:20,
            backgroundColor:"#f8f8f8",
            fontSize:18,
            paddingLeft:20,
            fontWeight:"600",
            marginVertical:5,   
          },
          inputError:{
            borderWidth:1,
            borderColor:"red",
            shadowColor: 'red',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 10,
            elevation: 5,  
          },
          titleInput:{
            fontSize:17,
            color:"#3A3A3A",
            fontWeight:"600",
            
          },
          button:{
            backgroundColor:colors.PRIMARY,
            fontWeight:"700",
            borderRadius:20,
            marginTop:10,
            height:40,
            width:270,
            
          },
          buttonText:{
            textAlign:"center",
            lineHeight:40,
            color:"#fff",
            fontWeight:"700",
            fontSize:17
          },
          titleMain:{
            fontSize:40,
            color:"#3A3A3A",
            marginHorizontal:15,
            fontWeight:"700",
          },
          titleSub:{
            fontSize:17,
            color:"#292929",
            fontWeight:400,
            marginBottom:20
          },
          errorText:{
            fontSize:12,
            color:"red",
            textAlign:"center"
          },
          waitText: {
            textAlign: 'center',
            marginVertical: 10,
            bottom:64,
            color:"#3A3A3A",
            position: 'absolute',
            fontSize: 16,
          }

    }
)
export default shareCss