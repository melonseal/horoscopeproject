/**
 * Horoscope Project for IB SL Computer Science
 * Created by Sarah Blankespoor on 9/27/17.
 */

signDisplay = ["your sign is Aquarius", "your sign is Pisces", "your sign is Aries", "your sign is Taurus", "your sign is Gemini",
    "your sign is Cancer", "your sign is Leo", "your sign is Virgo", "your sign is Libra", "your sign is Scorpio", "your sign is Sagittarius",
    "your sign is Capricorn", "that date is invalid"];

function onSubmit() {
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var name = document.getElementById("name").value;
    var todayDay = document.getElementById("todayDay").value;
    var todayMonth = document.getElementById("todayMonth").value;
    var birthdayCode = month + day;
    var todayCode = todayMonth + todayDay;
    var yourSign = determineSign(birthdayCode);
    var imageName = determineImage(yourSign);
    var birthdayMessage = isItBirthday(todayCode, birthdayCode, yourSign);
    console.log("yourSign=" + yourSign);
    document.getElementById("signDetermined").innerHTML = name + ", " + signDisplay[yourSign] + ".";
    document.getElementById("horoscope").innerHTML = determineHoroscope(yourSign);
    document.getElementById("returnImage").innerHTML = '<img src=' + imageName + ' alt="image not available" style="width:100px;height:100px;" >';
    document.getElementById("birthdayHoroscope").innerHTML = birthdayMessage;
}

function determineSign(dayCode){
    var userSign = 12;
    if((120 <= dayCode && dayCode <= 131) || (201 <= dayCode && dayCode <= 218)){
        userSign = 0;
    }
    if((219 <= dayCode && dayCode <= 229) || (301 <= dayCode && dayCode <= 320)){
        userSign = 1;
    }
    if((321 <= dayCode && dayCode <= 331) || (401 <= dayCode && dayCode <= 419)){
        userSign = 2;
    }
    if((420 <= dayCode && dayCode <= 430) || (501 <= dayCode && dayCode <= 520)){
        userSign = 3;
    }
    if((521 <= dayCode && dayCode <= 531) || (601 <= dayCode && dayCode <= 620)){
        userSign = 4;
    }
    if((621 <= dayCode && dayCode <= 630) || (701 <= dayCode && dayCode <= 722)){
        userSign = 5;
    }
    if((723 <= dayCode && dayCode <= 731) || (801 <= dayCode && dayCode <= 822)){
        userSign = 6;
    }
    if((823 <= dayCode && dayCode <= 831) || (901 <= dayCode && dayCode <= 922)){
        userSign = 7;
    }
    if((923 <= dayCode && dayCode <= 930) || (1001 <= dayCode && dayCode <= 1022)){
        userSign = 8;
    }
    if((1023 <= dayCode && dayCode <= 1031) || (1101 <= dayCode && dayCode <= 1121)){
        userSign = 9;
    }
    if((1122 <= dayCode && dayCode <= 1130) || (1201 <= dayCode && dayCode <= 1221)){
        userSign = 10;
    }
    if((1222 <= dayCode && dayCode <= 1231) || (101 <= dayCode && dayCode <= 119)){
        userSign = 11;
    }
    return userSign;
}

function determineHoroscope(sign){
    var horoscopeReading = "";
    if(sign == 0){
        horoscopeReading = "The drought has lasted thirty years now, and you are still lost in the desert. " +
            "You cannot seem to find your way out. Things seem hopeless, but take heart. Within the year," +
            " the sky will open up for you. Look to the flowers.";
    }
    if(sign == 1){
        horoscopeReading = "I know you have felt distant of late. That makes sense. " +
            "The lights, once so familiar, flicker in strange patterns. Pay attention to these patterns, " +
            "and you will find your reward. Start researching as soon as possible.";
    }
    if(sign == 2){
        horoscopeReading = "It is fire season. Again and again you open the news to see it burn before you, " +
            "see the paper blacken and curl, the ashes falling to the floor. Treat the burns on your hands " +
            "with morning dew. Soon, the fires will turn to dust and you will be able to breathe.";
    }
    if(sign == 3){
        horoscopeReading = "Nothing works like it used to. Months pass in dizzy hazes and strange figures " +
            "appear as silhouettes on rooftops along your commute. Find a different way to work, before" +
            " it is too late. Perhaps it is already too late. Reinvent yourself, right now.";
    }
    if(sign == 4){
        horoscopeReading = "The colors have begun to shift already, greens and blues fading into gold. " +
            "Everything is gold now, and you would do well to fear it. Stay away from chandeliers and " +
            "pay a visit to a ghost town. Write down what you see there. Someone will need it.";
    }
    if(sign == 5){
        horoscopeReading = "You are missed, even though you have not left yet. Find a window seat, " +
            "and the next person you need will come to you. Trust them, because they have " +
            "exactly what you've been looking for. Tell them a story, and they will trust you.";
    }
    if(sign == 6){
        horoscopeReading = "The insects know.";
    }
    if(sign == 7){
        horoscopeReading = "There is a storm building near your childhood home, that quiet town with the ghosts" +
            " that walk through the streets like anyone else. If you let the waves break, they will wash all" +
            " the ghosts out with the tide, and you do not want that. Find a good lawyer.";
    }
    if(sign == 8){
        horoscopeReading = "You have found a monster in your garden shed. Perhaps it does not seem so bad, now," +
            " but it will grow teeth if you let it. Perhaps it has already grown teeth, but hidden them from you. " +
            "Be wary. Buy an axe before you enter your garden. Dig a trench around the shed at noon.";
    }
    if(sign == 9){
        horoscopeReading = "The forest has been calling you for some time, now. Why aren't you listening? " +
            "Stay up late and open your ears. Take long walks at dusk, but make sure they are at the same " +
            "time every day, even when winter comes. Sit down under the trees and close your eyes.";
    }
    if(sign == 10){
        horoscopeReading = "You are worried about the rain. You call it torrential, but you do not " +
            "understand that the trees call it life. You have good reason to be worried about the rain, " +
            "because it isn't going to let up. The forest will flood and you will change, grow gills.";
    }
    if(sign == 11){
        horoscopeReading = "All the lights go out for a second at midnight. You blink exactly then, every " +
            "night, without fail. Then, the world changes, becomes strange and lovely and " +
            "dangerous. If you keep your eyes open, you will stay there, in that second. You have to choose.";
    }
    if(sign == 12){
        horoscopeReading = "Please try again.";
    }
    return horoscopeReading;
}

function determineImage(sign){
    if(sign == 0){
        return("http://www.astrology-zodiac-signs.com/images/aquarius.jpg");
    }else if(sign == 1){
        return("http://www.astrology-zodiac-signs.com/images/pisces.jpg");
    }else if(sign == 2){
        return("http://www.astrology-zodiac-signs.com/images/aries.jpg");
    }else if(sign == 3){
        return("http://www.astrology-zodiac-signs.com/images/taurus.jpg");
    }else if(sign == 4){
        return("http://www.astrology-zodiac-signs.com/images/gemini.jpg");
    }else if(sign == 5){
        return("http://www.astrology-zodiac-signs.com/images/cancer.jpg");
    }else if(sign == 6){
        return("http://www.astrology-zodiac-signs.com/images/leo.jpg");
    }else if(sign == 7){
        return("http://www.astrology-zodiac-signs.com/images/virgo.jpg");
    }else if(sign == 8){
        return("http://www.astrology-zodiac-signs.com/images/libra.jpg");
    }else if(sign == 9){
        return("http://www.astrology-zodiac-signs.com/images/scorpio.jpg");
    }else if(sign == 10){
        return("http://www.astrology-zodiac-signs.com/images/sagittarius.jpg");
    }else if(sign == 11){
        return("http://www.astrology-zodiac-signs.com/images/capricorn.jpg");
    }else{
        return("https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Dialog-error-round.svg/2000px-Dialog-error-round.svg.png");
    }
}

function isItBirthday(todayDayCode, birthdayCode, signNum) {
    var bdayHoroscope ="";
    if(todayDayCode == birthdayCode && signNum != 12) {
        bdayHoroscope = "It's also your birthday today- congratulations. Be prepared for extra bioluminescence.";
    }
    return bdayHoroscope;
}