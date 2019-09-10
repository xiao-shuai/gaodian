import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput,AsyncStorage,StatusBar,
    SafeAreaView,Alert,Linking,Modal,ProgressViewIOS
} from 'react-native'
import {gao} from '../sty/sty'
import {Button} from 'react-native-elements'
class Relese extends Component{
    static navigationOptions = {
        title: 'relese',
        headerStyle: {
            backgroundColor: gao.theme,
          },
          headerTintColor: '#fff',
      };
    
    constructor(props){
       super(props)
       this.state={

       }
    }
  
    render(){
        
        return (
        <SafeAreaView style={{flex:1,}}>
          <View style={{
          width:'92%',
          height:gao.h*.25,
          backgroundColor:'#D7DBDD',
          marginTop:20,
          padding:10,
          marginLeft:'4%'

          }}>
          <TextInput style={{height:'100%'}} multiline={true}/>
          </View>

          <View style={{marginLeft:'4%',marginTop:20}}>
          <Text style={{fontSize:18,color:'#797D7F'}}>Picture upload</Text>  
           <Image source={require('../img/tp.png')} style={{width:gao.w*.3,
            height:gao.w*.3,
            marginTop:20}}
            /> 
          </View>

         <Button title='Publish immediately' style={{
             width:'92%',marginLeft:'4%',marginTop:20,
         }} buttonStyle={{backgroundColor:gao.theme}}/>
        
        </SafeAreaView>
        )
    }


}

export default Relese