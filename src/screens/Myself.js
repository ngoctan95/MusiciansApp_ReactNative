import React, {Component} from 'react';
import {View,ScrollView} from 'react-native';
import {Tile, List, ListItem, Button} from 'react-native-elements';
import {me} from '../data/usersData';
class Myself extends Component{
    _onPress=()=>{
        this.props.navigation.navigate('Setting',{'data':1})
    }
    render(){
        console.log("myself",this.props);
        return(
            <ScrollView>
                    <Tile 
                    imageSrc={{uri: me.picture.large}}
                    featured={true}
                    title={`${me.name.first} ${me.name.last}`}/>
                    <Button title="Setting"
                    buttonStyle={{marginTop:15}}
                    onPress={this._onPress}/>
                    <List>
                        <ListItem 
                           title={"Email"}
                            rightTitle={`${me.email}`} 
                            rightTitleNumberOfLines={null}
                            rightTitleContainerStyle={{flex:5}}
                            hideChevron/>
                    </List>
                    <List>
                        <ListItem 
                           title={"Name"}
                            rightTitle={`${me.name.fist} ${me.name.last}`} 
                            rightTitleNumberOfLines={null}
                            rightTitleContainerStyle={{flex:5}}
                            hideChevron/>
                        <ListItem 
                           title={"Phone"}
                            rightTitle={`${me.phone}`} 
                            rightTitleNumberOfLines={null}
                            hideChevron/>
                    </List>
                    <List>
                        <ListItem 
                           title={"Location"}
                            rightTitle={`${me.location.street}`} 
                            rightTitleNumberOfLines={null}
                            hideChevron/>
                        <ListItem 
                           title={"National"}
                            rightTitle={`${me.nat}`} 
                            rightTitleNumberOfLines={null}
                            hideChevron/>
                    </List>
            </ScrollView>
        )
    }
}
export default Myself;