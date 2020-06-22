import React from 'react'
import {Button,Image} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Login from '../screens/Login/login'
import Payment from '../screens/Payment/payment'
import Restaurant from '../screens/Restaurant/restaurant'
import Upgrade from '../screens/Upgrade/upgrade'
import Register1 from '../screens/Register/register1'
import Register2 from '../screens/Register/register2'
import Offer from '../screens/Offer/offer'
import bell from '../imagess//bell.jpg'
import Time from '../screen2/Time/time'
import Work from '../screen2/Time/work'
import Data from '../screens/Practice/practice'


import Home from '../screen2/Home/Home'
import Next from '../screen2/Next/Next'
const MainNavigator=createStackNavigator(
    {
        Login:{
            screen:Login,
            navigationOptions:{
                title:'Login',
                headerTintColor:"black",
                headerTitleStyle:{
                    textAlign:"center",
                    fontFamily:'Lato',
                    fontSize: 20,
                    fontWeight: "bold",
                }
            }  
        },
        Payment:{
            screen:Payment,
            navigationOptions:{
            headerShown:false
        }
    },
        Restaurant:{
            screen:Restaurant,
            navigationOptions:{ 
                title:"Koramangala",
                 headerTintColor:"black",
            headerTitleStyle:{
                textAlign:"center",
                // width: 94.2,
                // height: 25.3,
                fontFamily: "Lato",
                // fontSize: 13,
                 fontWeight: "bold",
                // fontStyle: "normal",
                // marginTop:10
            },
            headerRight: () => (
               <Image source={require('../imagess/group_7.png')} 
               style={{ width:20,height:25,marginRight:20,marginBottom:15,marginTop:16}}/>
              )
                
            }
        },
        Upgrade:{
            screen:Upgrade,
            navigationOptions:{
                title:"Upgrade Plan",
                headerTintColor:"black",
                headerTitleStyle:{
                    textAlign:"center",
                    fontWeight: "bold",
                    fontFamily: "Lato",
                    fontSize: 17,
                    marginRight:50//added
                    
                }
            }
        },
        Register:{
            screen:Register1,
            navigationOptions:{
                title:"Registration Form",
            headerTitleStyle:{
                textAlign:"left",
                height: 24,
                fontFamily: "Lato",
                fontSize: 19,
                fontWeight: "bold",
                fontStyle: "normal",
                color: "#000000",
                marginTop:10,
                marginLeft:34,
                marginBottom:20//
            }
        }
        },
        Offer:{
            screen:Offer,
            navigationOptions:{
                title:(<Image style={{ width: 81,height: 16,}} 
                  source={require('../imagess/a.png')}/>),
                headerTintColor:"black",
                headerTitleStyle:{
                    alignSelf:'center',
                
                    marginTop:15,
                    marginBottom:13
                    
                },
                headerRight: () => (
                    <Image  source={require('../imagess/group_7.png')} 
                    style={{ width:20,height:25,marginRight:20,marginBottom:15,marginTop:16}}/>
                   )

            }
        },
        Data:{
            screen:Data,
            navigationOptions:{
                headerShown:false
            }

    },
    Time:{
        screen:Time,
        navigationOptions:{
            headerShown:false
        }
    }
    ,
    Work:{
        screen:Work,
        navigationOptions:{
        headerShown:false
        }
    },
Home:{
    screen:Home,
    navigationOptions:{
        title:'Schedule next pickup',
        headerStyle:{
            backgroundColor:'#573f29'
        },
        headerTitleStyle:{
            alignSelf:'center',
            fontFamily: "Lato",
            fontSize: 16,
            fontWeight: "bold",
            fontStyle: "normal",
            letterSpacing: 0,
            color: "#ffffff"
        },
        headerRight: () => (
            <Image source={require('../imagess/house_outline.png')} 
            style={{ width:20,height:19,marginRight:20,marginBottom:15,marginTop:16}}/>
           )
       
    }

    },
    Next:{
        screen:Next,
        navigationOptions:{
            title:'Schedule next pickup',
            headerStyle:{
                backgroundColor:'#573f29'
            },
            headerTitleStyle:{
                alignSelf:'center',
                fontFamily: "Lato",
                fontSize: 16,
                fontWeight: "bold",
                fontStyle: "normal",
                letterSpacing: 0,
                color: "#ffffff"
            },
            headerRight: () => (
                <Image source={require('../imagess/house_outline.png')} 
                style={{ width:20,height:19,marginRight:20,marginBottom:15,marginTop:16}}/>
               )
           
        }
    }
        },

        
{
    initialRouteName:'Time'}
        

)
export default AppNavigator=createAppContainer(MainNavigator)