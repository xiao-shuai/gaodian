import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import Main from '../main/Main'
import Shequ from '../shequ/Shequ'
import My from '../my/My'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {gao} from '../sty/sty'
import Relese from '../main/Relese'
import Login from '../login/Login'
import New from '../login/New'
import Mainxq from '../main/Mainxq'
import Shequxq from '../shequ/Shequxq'
const SOME=createBottomTabNavigator(
    {
        Main: Main,
        Shequ:Shequ,
        My:My,
        
      },
      {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
           
            let iconName;
            if (routeName === 'Main') {
                 iconName = 'bank';
              // Sometimes we want to add badges to some icons. 
              // You can check the implementation below.
            //   IconComponent = HomeIconWithBadge; 
            } else if (routeName === 'Shequ') {
                 iconName = `calendar`;
            } else if (routeName==='My'){
                 iconName=`account`
            }
    
            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} style={{fontSize:25,color:focused?gao.theme:gao.hui}}/>;
          },
        }),
        tabBarOptions: {
          activeTintColor: gao.theme,
          inactiveTintColor: 'gray',
        },
      }
  )


  const SOME_PAGE=createStackNavigator({
    Btm:{
      screen:SOME,
      navigationOptions:()=>({
       header:null,
       headerBackTitle:null,
   })
    },
    Relese:{screen:Relese},
    Login:{screen:Login},
    New:{screen:New},
    Mainxq:{screen:Mainxq},
    Shequxq:{screen:Shequxq}

   
  })   


  export default createAppContainer(SOME_PAGE)