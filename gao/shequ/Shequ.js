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
import  {gao} from '../sty/sty'
import {Button,Divider} from 'react-native-elements'
import  AntDesign  from 'react-native-vector-icons/AntDesign'
class Shequ extends Component{

    constructor(props){
        super(props)
        this.state={
         
        }
    }

    render(){
        const a=[
            {

            },
            {

            },
            {

            },
        ]
        const  data=[
            {
              uimg:'',
              name:'',
              time:'',
              content:'',
              con_img:[
                  {
                   img:'https://c-ssl.duitang.com/uploads/item/201804/29/20180429094243_UiTW5.thumb.700_0.jpeg',   
                  },
                  {
                    img:'https://c-ssl.duitang.com/uploads/item/201804/29/20180429094243_UiTW5.thumb.700_0.jpeg',   
                   },
                   {
                    img:'https://c-ssl.duitang.com/uploads/item/201804/29/20180429094243_UiTW5.thumb.700_0.jpeg',   
                   },

              ]   
            },
            {
                uimg:'',
                name:'',
                time:'',
                content:'',
                con_img:[
                    {
                     img:'https://c-ssl.duitang.com/uploads/item/201804/29/20180429094243_UiTW5.thumb.700_0.jpeg',   
                    },
                    {
                      img:'https://c-ssl.duitang.com/uploads/item/201804/29/20180429094243_UiTW5.thumb.700_0.jpeg',   
                     },
                     {
                      img:'https://c-ssl.duitang.com/uploads/item/201804/29/20180429094243_UiTW5.thumb.700_0.jpeg',   
                     },
  
                ]   
              },

        ]
        return(
            <SafeAreaView style={{flex:1}}>
                      
           <View style={{width:gao.w,height:gao.h*.1,
            backgroundColor:gao.theme,
            alignItems:'center',
            justifyContent:'center'
            }}>
            <Text style={{fontSize:18,color:'white',fontWeight:'500'}}>Community</Text>
           </View>
           
           <ScrollView contentContainerStyle={{alignItems:'center',padding:20}}>
          
          {
              data.map((i,k)=>{
                return  <View style={{width:'100%',marginTop:k==0?0:20}}>
                       <View style={{flexDirection:'row',alignItems:'center',width:'100%'}}>
             <Image source={{uri:'https://c-ssl.duitang.com/uploads/item/201608/07/20160807191315_jmf5L.thumb.700_0.jpeg'}} 
              style={{width:60,height:60,borderRadius:30}}
             />
             <View style={{marginLeft:10}}>
                 <Text style={{fontSize:18,fontWeight:'500'}}>AAA</Text>
                 <Text style={{marginTop:5,color:gao.hui2}}>2019/2/1</Text>
             </View>
               </View>
               <Text style={{fontSize:16,marginTop:20,lineHeight:22,letterSpacing:1}}>
               在制作油蛋糕时，糖和油脂在搅拌时能拌入大量空气。糖、油脂由搅拌产生磨擦作用而产生气泡。这种气泡进炉受热后进一步膨胀，使蛋糕体积
               </Text>
              
               <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',marginTop:20}}>
{
    a.map((i,k)=>{
return (
    <TouchableOpacity>
        <Image source={{uri:'https://c-ssl.duitang.com/uploads/item/201804/29/20180429094243_UiTW5.thumb.700_0.jpeg'}} 
         style={{width:gao.w*.28,height:gao.w*.28}}
        />
    </TouchableOpacity>
  )
    })
}
               </View>
               
               <View style={{flexDirection:'row',justifyContent:'space-between',
               width:'100%',marginTop:20}}>
                 <TouchableOpacity>
                  <AntDesign name='warning' style={{fontSize:18}} />
                 </TouchableOpacity>
                 <TouchableOpacity>
                  <AntDesign name='message1' style={{fontSize:18}} />
                 </TouchableOpacity>
                 <TouchableOpacity>
                  <AntDesign name='like1' style={{fontSize:18}} />
                 </TouchableOpacity>

               </View>
               <Divider style={{width:'100%',height:10,backgroundColor:'#D7DBDD',marginTop:20}}/>
              
                       </View>
              })
          }
             

              

           </ScrollView>

            </SafeAreaView>
        )
    }
}

export default Shequ