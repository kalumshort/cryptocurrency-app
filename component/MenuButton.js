


import React, {Component} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

    export default class MenuButton extends Component {  
        render() {
            return(
                <>
                    <Ionicons
                    name="md-menu"
                    color='#f2f2f2'
                    size={32}
                    onPress={ this.props.onPress }
                    />
                </>
            )
        }
    }

