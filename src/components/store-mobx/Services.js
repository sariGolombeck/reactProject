import { observable, makeObservable, action, get } from 'mobx';
class AppStore {
  isLogin = false;
  serviceList =this.getServiceList();
// appointments={

// // servicesDescription:' ',
// // servicePrice:' ',
// // dateTime:' ',
// // clientName:' ',
// // clientPhone:' ',
// // clientEmail:' '
// }
isFirst=true;
  constructor() {
    makeObservable(this, {
      isLogin: observable,
      setIsLogin: action,
      serviceList: observable,
      setServiceList: action,
      isFirst:observable,
    });
  }


  setIsLogin(flag) {
    this.isLogin = flag;
  }



  async setServiceList(newService) {
    const response = await fetch("http://localhost:8787/service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newService }),
    });
    if (response.status === 200) {
      console.log("excellent");
      isFirst=false;
    this.getServiceList();
    }
    if (response.status === 404) {
      console.log("no 404");
    }
  }
  async getServiceList() {
    try {
      const response = await fetch('http://localhost:8787/services', {
        method: 'GET',
      });
      if (response.ok) {
        const data = await response.json(); 
        this.serviceList = data.map(obj => obj.name); 
        console.log(this.serviceList);  

      } else {
        throw new Error('Unable to fetch services');
      }
    } catch (error) {
      console.error(error);
    }
  }
  


}
export default new AppStore();
