import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'

export default class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            isLogin: false
        }
    }

    login = () => {
        if (!this.state.username && !this.state.password) {
            Alert.alert("Error", "username dan password harus diisi !");
        } else {
            this.setState({
                isLogin: true
            })
        }


    }


    render() {
        const { username, password, isLogin } = this.state;
        return (
            <View style={styles.Form}>
                <Text style={styles.title}> Latihan Form </Text>
                <View style={styles.garis} />


                <View style={styles.isi}>
                    <View>
                        <Text style={styles.labeluser}> Username : </Text>
                        <TextInput style={styles.textInput}
                            placeholder="Masukan Username"
                            value={username} onChangeText={(username) => this.setState({ username })} />
                    </View>
                </View>

                <View style={styles.isi}>
                    <View>
                        <Text style={styles.labeluser}> Password : </Text>
                        <TextInput style={styles.textInput}
                            placeholder="Masukan Password"
                            secureTextEntry={true}
                            value={password} onChangeText={(password) => this.setState({ password })} />
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => this.login()}>
                    <Text style={styles.textbutton}>SUBMIT</Text>
                </TouchableOpacity>

                {

                    isLogin && (
                        <Text style={{ marginTop: 20 }}>
                            Hai {username}, anda berhasil login!
                        </Text>
                    )
                }



            </View >

        )
    }
}

const styles = StyleSheet.create({
    Form: { padding: 30 },
    title: { textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginVertical: 10 },
    garis: { borderBottomWidth: 1, marginBottom: 20 },
    labeluser: { fontSize: 15, marginTop: 10 },
    textInput: { borderWidth: 1, padding: 10, borderColor: 'grey', borderRadius: 5, height: 40, padding: 10 },
    textbutton: { textAlign: 'center', color: 'white', fontWeight: 'bold' },
    button: { marginTop: 20, backgroundColor: 'green', padding: 10, borderRadius: 5 }
})
