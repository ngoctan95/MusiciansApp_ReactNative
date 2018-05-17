import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Settings extends Component {
    rightIconPressed=()=>{
        this.props.navigation.navigate('Musicians');
    }
  render() {
      console.log("setting",this.props);
    return (
      <ScrollView>
        <List>
          <ListItem
            title="Notifications"
          />
          <ListItem
            title="Profile"
          />
          <ListItem
            title="Password"
          />
        </List>
        <List>
          <ListItem
            title="Sign Out"
            rightIcon={{ name: 'cancel' }}
            onPressRightIcon={this.rightIconPressed}
          />
        </List>
      </ScrollView>
    );
  }
}

export default Settings;
