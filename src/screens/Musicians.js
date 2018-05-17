import React,{Component} from 'react';
import {
    Text,
    View,
    ScrollView
} from 'react-native';
import {List,ListItem} from 'react-native-elements';
import {users} from '../data/usersData';
class Musicians extends Component{
    _onDetail=(musician)=>{
        this.props.navigation.navigate('DetailMusician',{...musician});
    }
    render(){
        console.log("musician",this.props);
        console.log(users);
        return(
            <ScrollView style={{flex:1,
                 marginTop:-20
                 }}>
                <List >
                    {users.map((user)=>(
                        <ListItem 
                            key={user.login.username}
                            roundAvatar={true}
                            avatar={{uri: user.picture.thumbnail}}
                            title={`${user.name.first} ${user.name.last}`}
                            subtitle={`${user.email}`}
                            onPress={()=>this._onDetail(user)}/>
                    ))}
                </List>
            </ScrollView>
        )
    }
}
export default Musicians;