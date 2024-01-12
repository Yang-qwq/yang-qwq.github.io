// 正计时函数
function ascTime(time, id) {
    // e.g. '2021-12-19 08:00:00';
    let startTime = new Date(time).getTime();
    let currentTime = new Date().getTime();
    let difference = currentTime - startTime;
    let m = Math.floor(difference / 1000);
    let mm = m % 60; // 秒
    let f = Math.floor(m / 60);
    let ff = f % 60; // 分钟
    let s = Math.floor(f / 60); // 小时
    let ss = s % 24;
    let day = Math.floor(s / 24); // 天数

    let timeString = "";
    if (day > 0) timeString += day + "天";
    if (ss > 0) timeString += ss + "小时";
    if (ff > 0) timeString += ff + "分钟";
    if (mm > 0) timeString += mm + "秒";
    id.innerHTML = timeString;
}

// 倒计时函数
function descTime(time, id) {
    // e.g. '2022-5-5 00:00:00'
    let s = new Date(time).getTime();
    let timeDtart = new Date().getTime();
    let start = s - timeDtart;
    let day = Math.floor(start / (3600 * 24 * 1000));
    let hour = Math.floor((start / (1000 * 3600)) % 24); // 取余一天24小时
    let min = Math.floor((start / (1000 * 30)) % 60); // 取余一小时60分钟
    let sec = Math.floor((start / 1000) % 60); // 取余一分钟60秒
    if (day >= 0) {
        let timeString = "";
        if (day > 0) timeString += day + "天";
        if (hour > 0) timeString += hour + "时";
        if (min > 0) timeString += min + "分";
        if (sec > 0) timeString += sec + "秒";
        id.innerHTML = timeString;
    } else {
        id.innerHTML = "倒计时结束！";
    }
}

