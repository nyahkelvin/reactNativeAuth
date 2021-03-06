import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

class Button extends Component {
    constructor(props) {
        super(props);
        
    }
    

    handlePress(){
        this.props.onPress()
    }
    
    render() {
        const { buttonStyle, textStyle } =  styles

        return (
            <TouchableOpacity style={buttonStyle} onPress={this.handlePress.bind(this)}>
                <Text style={textStyle}>
                    {this.props.children}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        fontWeight: '600',
        color: '#007aff',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
})

export  {Button};