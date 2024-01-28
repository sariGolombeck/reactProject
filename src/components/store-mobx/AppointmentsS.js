import moment from 'moment';
import { observable, makeObservable, action, get } from 'mobx';
class Appointments {
  appointments = this.getAppoinments();
// isNewAppoinment=false;
isWell=true;
  constructor() {
    makeObservable(this, {
      appointments: observable,
      setAppointments: action,
      isWell:observable
    });
  }

  async getAppoinments() {
    this.isWell=false;
    console.log(this.appointments)
    try {
      const response = await fetch('http://localhost:8787/appointments', {
        method: 'GET',
      });
      if (response.ok) {
        const data = await response.json();
        const sortedData = data.sort((a, b) => moment(a.dateTime) - moment(b.dateTime));
        this.appointments = sortedData;
      } else {
        throw new Error('Unable to fetch Appointments');
      }
    } catch (error) {
      console.error(error);
    }

  }
  setAppointments = async (newMeeting) => {

    
    console.log("meeting json", JSON.stringify(newMeeting));

    const response = await fetch("http://localhost:8787/appointment", {
        method: "POST",
        body: JSON.stringify(newMeeting),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if(response.status===200){
this.isWell=true;     

    }
    else{
      this.isWell=false;
    }
   

}
  setIsNewAppointment(bool)
  {
  // this.isNewAppoinment=bool;
  }
  
}
export default new Appointments()