import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {Icon,Button} from 'react-native-elements';

import Setting from '../screens/Setting';
import Myself from '../screens/Myself';
import DetailMusician from '../screens/DetailMusician';
import Musicians from '../screens/Musicians';

/**
 * Define the stack for feed
 * By the clicking item in musicians screen
 * move to new screen named detailmusician.
 * Therefore, must use stackNavigatior.
 */
export const MusicianStack = StackNavigator({
    Musicians:{
        screen: Musicians,
        navigationOptions: ({navigation})=>({
            title:'Musicians',
            headerTitle:'Musician'
        }),
    },
    DetailMusician:{
        screen: DetailMusician,
        navigationOptions:({navigation})=>({
            title:`${navigation.state.params.name.first} ${navigation.state.params.name.last}`,
            
        })
    },
});
const Left = ({ onPress }) => (
    <TouchableHighlight onPress={onPress}>
      <Icon color={tintColor} size={35} name="account-circle"></Icon>
    </TouchableHighlight>
  );
  /**
   * Do that for the not display tabbar in a new stack.
   * It play itself.
   */
// export const DetailMusicianStack = StackNavigator({
//     DetailMusician:{
//         screen: DetailMusician,
//         navigationOptions:({navigation})=>({
//             title:`${navigation.state.params.name.first} ${navigation.state.params.name.last}`,
//             headerLeft: <Button title="<==" onPress={()=>navigation.navigate('Musicians')} color='black' backgroundColor='#F7F7F7'/>
//         })
//     }
// });
export const MyselfStack = StackNavigator({
    Myself:{
        screen: Myself,
        navigationOptions: ({navigation})=>({
            title:'Me',
            headerTitle:'Me'
        }),
    }
});

/**
 * Define the Setting Tab for just it own.
 */
export const SettingStack = StackNavigator({
    Setting:{
        screen:Setting,
        navigationOptions:{
            title:'Setting'
        },
    },
});

/**
 * Combine Musician and Myself by the one in 2 tabs.
 * TabNavigator contains StackNavigator.
 * StackNavigator contains screen and its option.
 */
export const Tabs = TabNavigator({
     Musicians:{
        screen: MusicianStack,
        navigationOptions:{
            tabBarLabel : 'Musicians',
            tabBarIcon:({tintColor})=>
                <Icon name="list" color={tintColor} size={35}></Icon>
        },
    },
    Myself:{
        screen:MyselfStack,
        navigationOptions:({
            tabBarLabel:'Me',
            tabBarIcon:({tintColor})=>
            <Icon color={tintColor} size={35} name="account-circle"></Icon>
        })
    },
})

/**
 * So after that steps, we have 1 TabNavigator
 * contains Myself only and a Stacknavigator for DetailMusician
 * And we have another one is STackNavigator is Setting.
 * Now, combine them by a one, cause of switch and no changes.
 * => Using stackNavigator.
 * StackNavigator have RouteConfigMap(screen) and Config.
 */
export const Root = StackNavigator({
    Tabs:{
        screen:Tabs,
    },
    Setting:{
        screen:SettingStack,
    },
    // DetailMusician:{
    //     screen:DetailMusicianStack,
    // }
}, {
    mode: 'card',
    headerMode:'none'
})