let baseFare = 15;
const bookingFare = 20;
const costPerMin = 5;
let perKm = 14;

class UberPrice{
   constructor(seating,totalKms,rideTime){        
        this.seating = seating;
        this.totalKms = totalKms;
        this.rideTime = rideTime;
   }

   setSeating(seating){
    this.seating = seating;
   }

   getSeating(){
    return this.seating;
   }
   
   setTotalKms(totalKms){
       this.totalKms = totalKms;
   }
   
   getTotalKms(){
       return this.totalKms;
   }
   
    setRideTime(rideTime){
               this.rideTime = rideTime;
          }

          getRideTime(){
               return this.rideTime;
          }
          
          toString(){
            let bookingData = `Seater : ${this.getSeating()}\nTotalKmsCovered : ${this.getTotalKms()}\nTotalTimeCovered: ${this.getRideTime()}`
            return bookingData;
        }
   

   getPrice(){
        let result = bookingFare + ((baseFare * this.seating) + (perKm * this.totalKms) + (costPerMin * this.rideTime));
        return result;
   }
}

let priceObj = new UberPrice(4,10,30);
console.log(priceObj.toString());
console.log("Total Ride Charge including all charges :"+priceObj.getPrice());