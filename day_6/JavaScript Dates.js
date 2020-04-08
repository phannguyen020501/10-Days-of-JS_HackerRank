function getDayName(dateString) {
    let dayName;
    let date=new Date(dateString);
    let weekDay=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    dayName=weekDay[date.getDay()];
    
    return dayName;
}