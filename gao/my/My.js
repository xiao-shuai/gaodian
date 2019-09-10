import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput,AsyncStorage,
    SafeAreaView,Alert,Linking,Modal,ProgressViewIOS
} from 'react-native'
import {gao} from '../sty/sty'
import { Divider ,Button} from 'react-native-elements'
import  Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationActions } from 'react-navigation';

class My extends Component{

    constructor(props){
        super(props)
        this.state={

        }
    }
exit_out=()=>{
    this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })], 0)
    AsyncStorage.removeItem('ok')
}
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
               <View style={{width:gao.w,height:gao.h*.25,backgroundColor:gao.theme,
              alignItems:'center',justifyContent:'center'
            }}>
              <Image source={{uri:'https://c-ssl.duitang.com/uploads/item/201608/28/20160828091235_EdXQA.thumb.700_0.jpeg'}}
               style={{
                  width:gao.w*.26,height:gao.w*.26,borderRadius:gao.w*.13
              }}/>
              <Text style={{fontSize:20,color:'white',marginTop:10,fontWeight:'500'}}>Eat sugar</Text>
              <Text style={{marginTop:10,color:'white'}}>The man was lazy and left nothing behind.</Text>
               </View>
               <Divider style={{width:'100%',height:15,backgroundColor:'#F2F3F4'}}/>
               
               <TouchableOpacity style={{flexDirection:'row',
               justifyContent:'space-between',padding:20,
               borderBottomWidth:1,borderBottomColor:'#F2F3F4'
               }}>
                   <Text style={{fontSize:18,color:'#797D7F'}}>My release</Text>
                   <Ionicons  name='ios-arrow-forward'  style={{fontSize:25,color:'#A6ACAF'}}/>
               </TouchableOpacity>
               <TouchableOpacity style={{flexDirection:'row',
               justifyContent:'space-between',padding:20,
               borderBottomWidth:1,borderBottomColor:'#F2F3F4'
               }}>
                   <Text style={{fontSize:18,color:'#797D7F'}}>My release</Text>
                   <Ionicons  name='ios-arrow-forward'  style={{fontSize:25,color:'#A6ACAF'}}/>
               </TouchableOpacity>
               <TouchableOpacity style={{flexDirection:'row',
               justifyContent:'space-between',padding:20,
               borderBottomWidth:1,borderBottomColor:'#F2F3F4'
               }}>
                   <Text style={{fontSize:18,color:'#797D7F'}}>My release</Text>
                   <Ionicons  name='ios-arrow-forward'  style={{fontSize:25,color:'#A6ACAF'}}/>
               </TouchableOpacity>
               <TouchableOpacity style={{flexDirection:'row',
               justifyContent:'space-between',padding:20,
               borderBottomWidth:1,borderBottomColor:'#F2F3F4'
               }}>
                   <Text style={{fontSize:18,color:'#797D7F'}}>My release</Text>
                   <Ionicons  name='ios-arrow-forward'  style={{fontSize:25,color:'#A6ACAF'}}/>
               </TouchableOpacity>
           <Button buttonStyle={{width:'92%',marginLeft:'4%',marginTop:25,backgroundColor:gao.theme}} 
             title='log'
             onPress={()=>{
               this.exit_out()
             }}
           />
               

            </SafeAreaView>
        )
    }
}

export default My