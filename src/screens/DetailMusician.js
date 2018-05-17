import  React,{Component} from 'react';
import {ScrollView} from 'react-native';
import {Tile, List, ListItem} from 'react-native-elements';
import {TabNavigator, createBottomTabNavigator} from 'react-navigation';
class DetailMusician extends Component{
    // static navigationOptions={
    //     tabBar:null
    // }
    componentDidMount(){

    }
    render(){
        // const tabNav = createBottomTabNavigator('DetailMusician', {
        //     hiddenTabs: ['Musicians','Me']
        //     });
        console.log("detail",this.props);
        const {id,location,name,phone,picture,nat,email,dob}=this.props.navigation.state.params;
        return(
            <ScrollView>
                    <Tile 
                    imageSrc={{uri:picture.large}}
                    featured={true}
                    title={`${name.first} ${name.last}`}
                    caption={email}/>
                    <List>
                        <ListItem 
                            title={"Email"}
                            rightTitle={email}
                            rightTitleNumberOfLines={null}
                            titleNumberOfLines={null}
                            subtitleNumberOfLines={null}
                            rightTitleContainerStyle={{flex:5}}
                            hideChevron={true}/>
                        <ListItem 
                            title={"Phone"}
                            rightTitle={phone}
                            hideChevron={true}/>
                    </List>
                    <List>
                        <ListItem 
                            title={"First Name"}
                            rightTitle={name.first}
                            hideChevron={true}/>
                        <ListItem 
                            title={"Last Name"}
                            rightTitle={name.last}
                            hideChevron={true}/>
                    </List>
                    <List>
                        <ListItem 
                            title={"NAT"}
                            rightTitle={nat}
                            hideChevron={true}/>
                    </List>
                    <List>
                        <ListItem 
                            title={"Birthday"}
                            rightTitle={dob}
                            hideChevron={true}/>
                        <ListItem 
                            title={"Location"}
                            rightTitle={location.street}
                            hideChevron={true}/>
                    </List>
            </ScrollView>
        )
    }
}
export default DetailMusician;