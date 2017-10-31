import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { inputChanged, loginUser } from '../actions'
import { Card, CardSection, Button, Input, Spinner } from './commons'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.onLoginUser = this.onLoginUser.bind(this);
    }

    
    onLoginUser() {
        const { email, password } = this.props
        this.props.loginUser({ email, password })
    }

    renderButton() {
        if (this.props.isLoading) {
            return (
                <Spinner size="large" />
            )
        }

        return (
            <Button onPress={this.onLoginUser} >
                Login
            </Button>
        )
    }

    render() {
        const { errorStyle } = styles
        return (
            <View>
                <Card>
                    <CardSection>
                        <Input
                            keyboardType="email-address"
                            autoCorrect={false}
                            placeholder="email@gmail.com"
                            label="Email"
                            value={this.props.email}
                            onChangeText={email => this.props.inputChanged({
                            prop: 'email', value: email
                        })}
                        />

                    </CardSection>
                    <CardSection>
                        <Input
                            keyboardType="default"
                            autoCorrect={false}
                            secureTextEntry={true}
                            placeholder="******"
                            label="Password"
                            value={this.props.password}
                            onChangeText={password => this.props.inputChanged({
                            prop: 'password', value: password
                        })}
                        />
                    </CardSection>

                    <Text style={errorStyle}>
                        {this.props.error}
                    </Text>

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = ({ input, auth }) => {
    const { email, password } = input
    const { error, isLoading } = auth
    return {
        email,
        password,
        error,
        isLoading
    }
}

const styles = StyleSheet.create({
    errorStyle: {
        color: 'red',
        fontSize: 18,
        alignSelf: 'center'
    }
})

export default connect(mapStateToProps, { inputChanged, loginUser })(LoginForm)