import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { createEmployee , inputChanged } from '../actions'

import { Card, CardSection, Input, Button } from './commons'

class EmployeeCreate extends Component {
    constructor(props) {
        super(props);
        this.handleCreateEmployee = this.handleCreateEmployee.bind(this);
        
    }

    handleCreateEmployee(){
        const { name, phone } = this.props
        this.props.createEmployee({ name, phone})
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        autoComplete={false}
                        onChangeText={name => this.props.inputChanged({
                            prop: 'name', value: name
                        })}
                    />
                </CardSection>
                <Input 
                    label="Phone"
                    placeholder="555-555-5555"
                    value={this.props.phone}
                    autoComplete={false}
                    onChangeText={phone => this.props.inputChanged({
                            prop: 'phone', value: phone
                        })}
                />
                <CardSection>
                </CardSection>
                <CardSection>
                    <Button onPress={this.handleCreateEmployee}>
                        Save
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = ( state ) => {
    const { name, phone } = state.emp
    return { name, phone }
}

export default connect(mapStateToProps, {createEmployee, inputChanged})(EmployeeCreate)