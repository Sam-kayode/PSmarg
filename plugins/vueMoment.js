import Vue from "vue";
Vue.filter("dayConvFull", function(value) {
    const milliseconds = value * 1000
    const dateObject = new Date(milliseconds)
    /* const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15
   console.log(dateObject) */
   
   const day=dateObject.toLocaleString("en-US", {weekday: "long"}) ;// Monday
      
   
    return `${day}`
   });