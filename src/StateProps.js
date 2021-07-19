import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class DesignTampilan extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sekolah: 'wahidev academy',
            kelas: 'tentang react native'
        }
    }

    gantiState() {
        this.setState({
            sekolah: 'Dicocrot'
        })
    }


    render() {
        const { kelas } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.title}> Fundamental State Props </Text>

                <View style={styles.garis}></View>

                <View style={styles.isi}>
                    <Text>Ini adalah {this.state.sekolah}</Text>
                    <Text>Kegiatannya {kelas}</Text>


                    <TouchableOpacity style={styles.Tombol} onPress={() => this.gantiState()}>

                        <Text style={{
                            textAlign: 'center',
                            color: 'white',
                            fontWeight: 'bold'
                        }}>Ganti state</Text>
                    </TouchableOpacity>
                </View >


            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: { padding: 20 },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    garis: {
        marginTop: 5,
        marginBottom: 10,
        borderBottomWidth: 1
    },
    isi: {
        marginTop: 20
    },

    Tombol: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10,
        marginTop: 10
    }
})
