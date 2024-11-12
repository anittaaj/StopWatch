let m=0,s=0,ms=0;


var minutes=document.getElementById('minutes');
var seconds=document.getElementById('seconds');
var milisec=document.getElementById('mili');


let st=0;
let interval="";

function watch1()
{
    ms++;
    if(ms/60 === 1)
    {
        ms=0;
        s++;
        if(s/60 === 1)
        {
            s=0;
            m++;  
        }
    }

    if(ms < 10)
    {
        milisec='0';
    }
    else
    {
        milisec=ms;
    }

    if(s < 10)
    {
        seconds='0';
    }
    else
    {
        seconds=s;
    }


    if(m < 10)
    {
        minutes='0';
    }
    else
    {
        minutes=m;
    }

    document.getElementById('M').innerHTML=m;
    document.getElementById('S').innerHTML=s;
    document.getElementById('MS').innerHTML=ms;
}


function watch()
{
    if(st==0)
    {
        interval=window.setInterval(watch1,100);
        document.getElementById('b1').innerHTML='Pause';
    }
    else if(st == 1)
    {
        window.clearIntervalInterval(interval);
        document.getElementById('b1').innerHTML='Start';
    }

}