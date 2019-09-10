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
import ImagePicker from 'react-native-image-picker';

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
        iscover:false
       }
       this.option={

        title: 'Choose picture',
        
        cancelButtonTitle: 'cancel',
        
        takePhotoButtonTitle:'Taking pictures',
        
        chooseFromLibraryButtonTitle:'gallery',
        
        allowsEditing:true,
        
        quality: 0.8,
        
        noData: false,
        
        storageOptions: {
        
        skipBackup: true,
        
        path: 'images'
        
        }
        
        }
    }
    choosePicker = () => {
        ImagePicker.showImagePicker(this.option, (response) => {
          console.log('Response = ', response);
          if (response.didCancel) {
            console.log('User cancelled image picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
            console.log('source--!!')
            let source = response.uri;
            // this.props.oneStore.change_tx(source)
            this.setState({
              iscover: true,
               img:source,
            })
          }
        });
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
          <TextInput style={{height:'100%'}} multiline={true} 
            onChangeText={(con)=>{
                this.setState({con})
            }}
          />
          </View>

          <View style={{marginLeft:'4%',marginTop:20}}>
          <Text style={{fontSize:18,color:'#797D7F'}}>Picture upload</Text>  
           {
               this.state.iscover?
               <Image source={{uri:this.state.img}} style={{width:gao.w*.3,
                height:gao.w*.3,
                marginTop:20}}
                />
                :
                <Image source={require('../img/tp.png')} style={{width:gao.w*.3,
                    height:gao.w*.3,
                    marginTop:20}}
                    />
           }
           
          </View>

         <Button title='Publish immediately' style={{
             width:'92%',marginLeft:'4%',marginTop:20,
         }} buttonStyle={{backgroundColor:gao.theme}}/>
        
        </SafeAreaView>
        )
    }


}

export default Relese