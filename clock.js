function showClock()
{
    updateClock();
    window.setInterval("updateClock()",1);
}
function updateClock()
{
    var obj=new Date();
    var day=obj.getDay();
    var mon=obj.getMonth();
    var date=obj.getDate();
    var yr=obj.getFullYear();
    var hr=obj.getHours();
    var min=obj.getMinutes();
    var sec=obj.getSeconds();
    var per="AM";
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    if(hr==0)
    {
        h=12;
    }
    if(hr>12)
    {
        hr=hr-12;
        per="PM";
    }
    hr=(hr< 10) ? "0"+hr : hr;
    min=(min< 10) ? "0"+min : min;
    sec=(sec< 10) ? "0"+sec : sec;
    document.getElementById('day').innerHTML=days[day];
    document.getElementById('month').innerHTML=monthNames[day];
    document.getElementById('date').innerHTML=date;
    document.getElementById('year').innerHTML=yr;
    document.getElementById('hour').innerHTML=hr;
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;
    document.getElementById('period').innerHTML=per;
}
