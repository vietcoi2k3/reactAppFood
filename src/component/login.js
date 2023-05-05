import React, { useState } from 'react';
import { Button, Text, TextInput, View ,TouchableOpacity, Image, ScrollView} from 'react-native';
import AppStyle from '../theme';
import myImage from '../asset/img/Group_4.png';
import { useNavigation } from '@react-navigation/native';
const Login = ({navigation})=>{
    // const navigation = useNavigation();
    const [maSv,setMaSv] =useState("")
    const [pass,setPass] =useState("")

    const handleLogin =()=>{
       
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!maSvRegex.test(maSv)){
            console.log("ma sinh vien khong hop le")
        }
       
        else{
            if(!passRegex.test(pass)){
                console.log("mat khau phai co it nhat 1 chu cai hoa 1 chu cai thuong va mot ki tu dac biet và không được dưới 8 kí tự")
            }
            else{
                console.log("đăng nhập thành công")
            }
        }
    }

   
    return(
        <ScrollView contentContainerStyle={AppStyle.shareCss.container}>
        
            <View >
                <Image source={myImage}/>
            </View>
            <Text style={AppStyle.shareCss.titleMain}>Chào mừng</Text>
            <Text style={AppStyle.shareCss.titleSub}>Vui lòng đăng nhập & đăng kí</Text>
            <View style={{marginTop:20}}>
                <Text style={AppStyle.shareCss.titleInput}>Mã sinh viên:</Text>
                <TextInput 
                    onEndEditing={this.clearFocus}
                    placeholder='nhập mã sinh viên'
                    style={AppStyle.shareCss.input}
                    onChangeText={(e)=>{
                        
                        return setMaSv(e)}
                    }
                    value={maSv}
                   
                    onSubmitEditing={()=>{}}
                />
                <Text style={AppStyle.shareCss.titleInput}>Mật khẩu:</Text>
                <TextInput
                    placeholder='nhập mật khẩu'
                    secureTextEntry={true}
                    style={AppStyle.shareCss.input}
                    onChangeText={(e)=>{
                     
                        return setPass(e)}
                    }
                    value={pass}
                />
                <TouchableOpacity style={AppStyle.shareCss.button} 
                onPress={handleLogin}>
                    <View>
                        <Text style={AppStyle.shareCss.buttonText}>đăng nhập</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={AppStyle.StyleLogin.bot}>
                <TouchableOpacity style={{...AppStyle.shareCss.button,...AppStyle.StyleLogin.buttonRegister}} onPress={() => {navigation.navigate("SignIn") }}>
                    <View >
                        <Text style={{...AppStyle.shareCss.buttonText}}>Tạo tài khoản</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={AppStyle.shareCss.footerText}>Vận hành bởi IOT-SOUP 2023</Text>
        
        </ScrollView>
    )
}

export default Login