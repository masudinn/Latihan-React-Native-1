import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class DesignTampilan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Fundamental Design Tampilan </Text>
                <View style={styles.garis}></View>



                <View style={styles.isi}>
                    <Text>Belajar Flex Box Vertical</Text>
                    <View style={styles.flexRow}>
                        <View style={styles.biru} />
                        <View style={styles.merah} />
                        <View style={styles.hijau} />
                    </View>
                </View >

                <View style={styles.isi}>
                    <Text>Belajar Flex Box Horizontal</Text>
                    <View style={styles.flexColumn}>
                        <View style={styles.biru} />
                        <View style={styles.merah} />
                        <View style={styles.hijau} />
                    </View>
                </View >

                <Text style={{ textAlign: 'center' }} >Belajar Flex Box Justivy Conten</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.biru} />
                    <View style={styles.merah} />
                    <View style={styles.hijau} />
                </View >


                <View style={styles.isi}>
                    <Text>Belajar Flex Box Align</Text>
                    <View style={styles.flexColumn}>
                        <View style={styles.biru} />
                        <View style={styles.merah} />
                        <View style={styles.hijau} />
                    </View>
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
    flexRow: {
        flexDirection: 'row'
    },
    biru: {
        width: 50,
        height: 50,
        backgroundColor: 'blue'
    },
    merah: {
        width: 50,
        height: 20,
        backgroundColor: 'red'
    },
    hijau: {
        width: 50,
        height: 50,
        backgroundColor: 'green'
    },
    flexColumn: {
        flexDirection: 'column'
    },
})
