const locale = new Intl.DateTimeFormat().resolvedOptions().locale;
// default local = 'en'
let HourTime = Number(Intl.DateTimeFormat('en', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    hour12: false,
}).format(new Date()));
let weekDay = Intl.DateTimeFormat(locale, {
    timeZone: 'Asia/Kolkata',
    weekday: 'long',
}).format(new Date());
function updateDateTime(date) {
    let dateTimeofClinet = new Date(0);
    dateTimeofClinet.setUTCSeconds(date);
    HourTime = Number(Intl.DateTimeFormat(locale, {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        hour12: false,
    }).format(dateTimeofClinet));
    weekDay = Intl.DateTimeFormat(locale, {
        timeZone: 'Asia/Kolkata',
        weekday: 'long',
    }).format(dateTimeofClinet);
}
function getClinetDay() {
    weekDay = Intl.DateTimeFormat(locale, {
        timeZone: 'Asia/Kolkata',
        weekday: 'long',
    }).format(new Date());
    return weekDay;
}
function getClinetTime() {
    HourTime = Number(Intl.DateTimeFormat(locale, {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        hour12: false,
    }).format(new Date()));
    return HourTime;
}
function updateTimeNow() {
    getClinetDay();
    getClinetTime();
}
export { HourTime, weekDay, updateDateTime, updateTimeNow, getClinetDay, getClinetTime };
