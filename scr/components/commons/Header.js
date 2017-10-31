import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Header extends Component {
    render() {
        const { headerContainer, headerText } = styles
        return (
            <View style={headerContainer}>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        paddingTop:15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export  {Header}