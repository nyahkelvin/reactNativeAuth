import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

class Spinner extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        const { size } = this.props
        return (
            <View style={styles.spinnerStyle}>
                <ActivityIndicator size = {size || "large"} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export  {Spinner}