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
import Swiper from 'react-native-swiper'
import {gao} from '../sty/sty'
class Main extends Component{

    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        const aa=[
            {
              img:'https://c-ssl.duitang.com/uploads/item/201706/13/20170613200830_hHMLZ.thumb.700_0.jpeg',
              tit:'Coffee dessert',
              hot:'125'  
            },
            {
                img:'https://c-ssl.duitang.com/uploads/item/201601/11/20160111171905_zF5d3.thumb.700_0.jpeg',
                tit:'Turkish dessert',
                hot:'234'  
              },
              {
                img:'https://c-ssl.duitang.com/uploads/item/201804/29/20180429094010_zvWmK.thumb.700_0.jpeg',
                tit:'Jujube Mud Cake',
                hot:'345'  
              },
              {
                img:'https://c-ssl.duitang.com/uploads/item/201511/17/20151117211302_SKysX.thumb.700_0.jpeg',
                tit:'Coffee dessert',
                hot:'333'  
              },
              {
                img:'https://c-ssl.duitang.com/uploads/item/201508/15/20150815155144_Pd3sn.thumb.700_0.jpeg',
                tit:'Cakes and Pastries',
                hot:'233'  
              },
              {
                img:'https://c-ssl.duitang.com/uploads/item/201504/15/20150415H1746_tjWdz.thumb.700_0.jpeg',
                tit:'Cakes and Pastries',
                hot:'234'  
              },
              {
                img:'https://c-ssl.duitang.com/uploads/item/201508/15/20150815155144_Pd3sn.thumb.700_0.jpeg',
                tit:'Cakes and Pastries',
                hot:'233'  
              },
              {
                img:'https://c-ssl.duitang.com/uploads/item/201504/15/20150415H1746_tjWdz.thumb.700_0.jpeg',
                tit:'Cakes and Pastries',
                hot:'234'  
              },
              {
                img:'https://c-ssl.duitang.com/uploads/item/201504/15/20150415H1746_tjWdz.thumb.700_0.jpeg',
                tit:'Cakes and Pastries',
                hot:'234'  
              },
        ]
        return(
            <SafeAreaView style={{flex:1}}>
             <ScrollView>
                 
            <View style={{height:gao.h*.25}}>
             <Swiper  >
              <TouchableOpacity>
             <Image source={require('../img/ban1.png')} style={styles.ban}/>
              </TouchableOpacity>
              <TouchableOpacity>
            <Image source={require('../img/ban2.png')} style={styles.ban}/>
              </TouchableOpacity>
             </Swiper>
             </View>
              
              {/*  */}
              <View style={{paddingBottom:0,paddingTop:20,paddingLeft:20}}>
                  <Text style={{fontSize:18,fontWeight:'500',color:gao.theme}}>Hot desserts</Text>
              </View>

              <View style={{
              padding:20,
              flexDirection:'row',
              justifyContent:'space-between',
              flexWrap:'wrap'
              }}>
              {
                aa.map((i,k)=>{
                  return (
                      <TouchableOpacity style={{marginTop:20}}>
                       <Image source={{uri:i.img}} style={{width:gao.w*.28,height:gao.w*.28}} />
                       <Text style={{marginTop:8,fontWeight:'500',fontSize:16}}>{i.tit.substr(0,10)+'...'}</Text>
                      </TouchableOpacity>
                  )
                })
              }
              </View>
             </ScrollView>  
            </SafeAreaView>
        )
    }
}

export default Main
const styles =StyleSheet.create({
    ban:{
        width:gao.w,
        height:gao.h*.25
    }
})