import { Image, ScrollView, View,Text } from "react-native";
import success from "../asset/img/success.png"
import AppStyle from '../theme';


function LoginSigninSuccess({route}) {
    const {isLogin, isSignin} = route.params
    return (
        <ScrollView contentContainerStyle={AppStyle.shareCss.container}>
           <View style={AppStyle.StyleLoginSuccess.container}>
                <Image source={success}/>
           </View>
           <Text style={[AppStyle.shareCss.titleMain, AppStyle.StyleLoginSuccess.titleMain] }>{isLogin ? 'Đăng nhập thành công!' : 'Đăng kí thành công!'}</Text>
           { isSignin &&  <View style={AppStyle.StyleLoginSuccess.card} >
                <Image source={success} style={AppStyle.StyleLoginSuccess.cardImage}/>
                <View style={AppStyle.StyleLoginSuccess.cardContent}>
                    <Text style={AppStyle.StyleLoginSuccess.cardText}>Nguyen Thanh Long</Text>
                    <Text style={AppStyle.StyleLoginSuccess.cardPhone}>A44306 | 0123456789</Text>
                </View> 
           </View>}
           <Text style={AppStyle.shareCss.waitText}>{isLogin? 'Vui lòng đợi..' : 'Đang chuyển tới Trang chủ..'}</Text>
           <Text style={AppStyle.shareCss.footerText}>Vận hành bởi IOT soup 2023</Text>    
        </ScrollView>
      );
}

export default LoginSigninSuccess;