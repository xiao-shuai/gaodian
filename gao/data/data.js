import { observable, action } from "mobx";
class  Gao {
    @observable login;
    
    constructor(){
        this.login=false
    }

    change_login=(e)=>{
        this.login=e
    }
   
}
const mbx=new Gao()

const store={
    mbx
}
export default store