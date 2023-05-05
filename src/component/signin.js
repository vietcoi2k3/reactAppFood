import React, { useState } from 'react';
import { ScrollView, TextInput, Button, TouchableOpacity, Text, StyleSheet,View ,Image, Keyboard} from 'react-native';
import myImage from "../asset/img/Group_4.png"
import AppStyle from '../theme';
const SignIn = () => {
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [inputErrors,setInputErrors] =useState({}); 

  const handleRegistration = () => {
    setInputErrors({});

    const maSvRegex = /^[aA]\d{5}$/;
    // Validate fields
    const errors = {};
    if (!name) {
      errors.name = 'Họ và tên không được để trống';
    }
    if (!studentId) {
      errors.studentId = 'Mã sinh viên không được để trống';
    }
    if (!phone) {
      errors.phone = 'Số điện thoại không được để trống';
    }
    if (!password) {
      errors.password = 'Mật khẩu không được để trống';
    }
    if (!confirmPassword) {
      errors.confirmPassword = 'Xác nhận mật khẩu không được để trống';
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Xác nhận mật khẩu không khớp';
    }
    if (studentId&&(maSvRegex.test(studentId)===false))
    {
      errors.studentIdNotValid="mã sinh viên không hợp lệ"
    }
    setInputErrors(errors);
  };

  return (
    <ScrollView contentContainerStyle={AppStyle.shareCss.container}>
              <View >
                <Image source={myImage}/>
            </View>
      <Text style={AppStyle.shareCss.titleMain}>Tạo tài khoản</Text>
      <Text style={AppStyle.shareCss.titleSub}>Quy trình nhanh gọn,bảo mật</Text>

      <View>
      <Text style={AppStyle.shareCss.titleInput}>Thông tin cá nhân:</Text>
      <TextInput
       
        style={[AppStyle.shareCss.input,inputErrors.name&&AppStyle.shareCss.inputError]}
        placeholder="Họ và tên"
        onChangeText={text => setName(text)}
        value={name}
      />
         {inputErrors.name && (
          <Text style={AppStyle.shareCss.errorText}>{inputErrors.name}</Text>
        )}
       
      <TextInput
        
        style={[AppStyle.shareCss.input,(inputErrors.studentId&&AppStyle.shareCss.inputError),(inputErrors.studentIdNotValid&&AppStyle.shareCss.inputError)]}
        placeholder="Mã sinh viên"
        onChangeText={text => setStudentId(text)}
        value={studentId}
      />
       {
          inputErrors.studentIdNotValid&&(
            <Text style={AppStyle.shareCss.errorText}>{inputErrors.studentIdNotValid}</Text>
          )
        }
        {inputErrors.studentId && (
          <Text style={AppStyle.shareCss.errorText}>{inputErrors.studentId}</Text>
        )}
      <TextInput
        
        style={[AppStyle.shareCss.input,inputErrors.phone&&AppStyle.shareCss.inputError]}
        placeholder="Số điện thoại"
        onChangeText={text => setPhone(text)}
        value={phone}
      />
         {inputErrors.phone && (
          <Text style={AppStyle.shareCss.errorText}>{inputErrors.phone}</Text>
        )}
      </View>
      <View>
      <Text style={AppStyle.shareCss.titleInput}>Mật khẩu:</Text>
      <TextInput
        
        style={[AppStyle.shareCss.input,inputErrors.password&&AppStyle.shareCss.inputError]}
        placeholder="Mật khẩu"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
         {inputErrors.password && (
          <Text style={AppStyle.shareCss.errorText}>{inputErrors.password}</Text>
        )}
      <TextInput
        
        style={[AppStyle.shareCss.input,inputErrors.confirmPassword&&AppStyle.shareCss.inputError]}
        placeholder="Xác nhận mật khẩu"
        onChangeText={text => setConfirmPassword(text)}
        value={confirmPassword}
        secureTextEntry={true}
      />
         {inputErrors.confirmPassword && (
          <Text style={AppStyle.shareCss.errorText}>{inputErrors.confirmPassword}</Text>
        )}
      </View>
      <TouchableOpacity style={AppStyle.shareCss.button} onPress={handleRegistration}>
        <Text style={AppStyle.shareCss.buttonText}>Đăng ký</Text>
      </TouchableOpacity>
      <Text style={AppStyle.shareCss.footerText}>Vận hành bởi IOT soup 2023</Text>
    </ScrollView>
  );
};


export default SignIn