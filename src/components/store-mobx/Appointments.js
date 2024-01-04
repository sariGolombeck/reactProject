
import { observable, makeObservable, action, get } from 'mobx';
class Appointments {
  appointments = this.getAppoinments();
isNewAppoinment=false;

  constructor() {
    makeObservable(this, {
      // //Details:observable,
      appointments: observable,
isNewAppoinment:observable,
setIsNewAppointment:action,
      setAppointments: action
    });
  }

  async getAppoinments() {
    try {
      const response = await fetch('http://localhost:8787/appointments', {
        method: 'GET',
      });
      if (response.ok) {
        const data = await response.json();
        this.appointments = data;
      } else {
        throw new Error('Unable to fetch Appointments');
      }
    } catch (error) {
      console.error(error);
    }
    console.log(this.appointments);
  }



  async setAppointments(newMeeting) {
    const response = await fetch("http://localhost:8787/appointment",
      {
       
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMeeting),
      });

    if (response.status === 200) { console.log(response.statusText) ;
       this.getAppoinments();
      }
    else  if (response.status === 400) 
    { console.log("error datetime") 
    this.isNewAppoinment=true;}
    else  
    { console.log("error new meeting") }
  }
  setIsNewAppointment(bool)
  {
  this.isNewAppoinment=bool;
  }
  
}
export default new Appointments()