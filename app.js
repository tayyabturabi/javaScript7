function updateTimer() {
    future  = Date.parse("June 19, 2024 7:30:00");
    now     = new Date();
    diff    = future - now;
    
    month = Math.floor( diff / (1000*60*60*24*30) );
    days  = Math.floor( diff / (1000*60*60*24) );
    hours = Math.floor( diff / (1000*60*60) );
    mins  = Math.floor( diff / (1000*60) );
    secs  = Math.floor( diff / 1000 );
  
    mth = month
    d = days - month * 30;
    h = hours - days  * 24 ;
    m = mins  - hours * 60;
    s = secs  - mins  * 60;
  
    document.getElementById("timer")
      .innerHTML =
        '<div>' + mth + '<span>Month</span></div>' +
        '<div>' + d + '<span>days</span></div>' +
        '<div>' + h + '<span>hours</span></div>' +
        '<div>' + m + '<span>minutes</span></div>' +
        '<div>' + s + '<span>seconds</span></div>' ;
  }
  setInterval('updateTimer()', 1000 );
