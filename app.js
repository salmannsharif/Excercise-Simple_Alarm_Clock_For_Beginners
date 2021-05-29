console.log('In this Exercise we create a Alarm Clock ---> By Salman'); // Sample text to see js file working or not!

var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');

const alarmSubmit=document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click', setAlarm);

// Function to play ringtone .....
function ringBell()
{
    audio.play();
}


function setAlarm(e)
{
    console.log('You click the button');
    e.preventDefault();

    let alarm=document.getElementById('alarm');
    let regex=/^\d+/;
    let str=alarm.value;

    if(regex.test(str))
    {
    alarmDate=new Date(alarm.value);
    console.log(alarmDate);

    let now= new Date();

    let timetoAlarm= alarmDate- now;
    console.log(timetoAlarm);

    setTimeout(() => {
        console.log('Ring Now');
        ringBell();
    }, timetoAlarm);
}
else
{
    throw new Error ('This is Invalid');
}

}