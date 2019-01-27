import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet , Picker, Text} from 'react-native';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";




class HeaderMenu extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <MenuProvider style={{ flexDirection: "column", padding: 30 }}>
            <Menu onSelect={value => alert(`You Clicked : ${value}`)}>
    
              <MenuTrigger>
              <Text style={styles.headerText}>DropDown Menu</Text>
              </MenuTrigger>
    
              <MenuOptions>
                <MenuOption value={"Login"}>
                  <Text style={styles.menuContent}>Login</Text>
                </MenuOption>
                <MenuOption value={"Register"}>
                  <Text style={styles.menuContent}>Register</Text>
                </MenuOption>
                <MenuOption value={"Download"}>
                  <Text style={styles.menuContent}>Download</Text>
                </MenuOption>
                <MenuOption value={"Logout"}>
                  <Text style={styles.menuContent}>Logout</Text>
                </MenuOption>
                <MenuOption value={3} disabled={true}>
                  <Text style={styles.menuContent}>Disabled Menu</Text>
                </MenuOption>
              </MenuOptions>
    
            </Menu>
          </MenuProvider>
        );
    }
}
export default HeaderMenu;

const styles = StyleSheet.create({
    icon: {
        color: 'white',
        marginRight: 30,
        // fontSize: 20,
    },
});




// selectedValue={this.state.language}
// style={{ height: 50, width: 100 }}
// onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>

            {/* <Icon style={styles.icon} name='bars'></Icon> */}

             
            {/* <Picker
            style={styles.icon}
            selectedValue='test'
            >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker> */}
