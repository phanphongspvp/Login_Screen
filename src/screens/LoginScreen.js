import { TouchableOpacity, View, Image, Text, StyleSheet, Button } from 'react-native'
import React, { Component } from 'react'
import CusButton from '../components/Button';
import CusInput from '../components/Input';

export class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.app}>
            <View style={styles.header}>
                <Image style={styles.img} source={require('../assets/FBLogin.png')} />
                <CusInput placeholder="Số điện thoại hoặc email" type={`Border_Rds_T`} />
                <CusInput placeholder="Mật khẩu" type={`Border_Rds_B`} />
                <CusButton text={'Đăng nhập'} />
                <TouchableOpacity>
                    <Text style={styles.forgot_pass}>Quên mật khẩu?</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.come_back}>Quay lại</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 80}}>
                    <View 
                    style={{
                        width: 60, 
                        height: 2, 
                        borderWidth: 1,
                        borderColor: '#e4e4e7',
                    }}></View>
                    <Text style={{paddingLeft: 4, paddingRight: 4, color: '#010101'}}>
                        HOẶC
                    </Text>
                    <View
                    style={{
                        width: 60, 
                        height: 2, 
                        borderWidth: 1,
                        borderColor: '#e4e4e7',
                    }}></View>
                </View>
                <CusButton bgColor='#e7f3ff' fgColor='#025df6' text={'Tạo tài khoản mới'} />
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    app: {
        
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '100%',
        height: null,
        aspectRatio: 800 / 500,
        marginBottom: 20,
    },
    forgot_pass: {
        fontSize: 16,
        color: '#196fdf',
        marginTop: 16, 
        fontWeight: 'bold' 
    },
    come_back: {
        fontSize: 16,
        color: '#196fdf',
        marginTop: 12,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default LoginScreen