
const locale = new Intl.DateTimeFormat().resolvedOptions().locale;
// default local = 'en'

let HourTime:number = Number(
    Intl.DateTimeFormat('en', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        hour12: false,
    }).format(new Date())
);

let weekDay:string = Intl.DateTimeFormat(locale , {
    timeZone: 'Asia/Kolkata',
    weekday: 'long',
}).format(new Date());


function updateDateTime(date : any) : void {

	let dateTimeofClinet:Date = new Date(0) ;
    dateTimeofClinet.setUTCSeconds(date) ;

    HourTime = Number(
        Intl.DateTimeFormat(locale, {
            timeZone: 'Asia/Kolkata',
            hour: 'numeric',
            hour12: false,
        }).format(dateTimeofClinet)
    );
    
    weekDay = Intl.DateTimeFormat(locale , {
        timeZone: 'Asia/Kolkata',
        weekday: 'long',
    }).format(dateTimeofClinet);

}

function getClinetDay() : string {
    weekDay = Intl.DateTimeFormat(locale , {
        timeZone: 'Asia/Kolkata',
        weekday: 'long',
    }).format(new Date());
    return weekDay ;
}

function getClinetTime() : number {
    HourTime = Number(
        Intl.DateTimeFormat(locale, {
            timeZone: 'Asia/Kolkata',
            hour: 'numeric',
            hour12: false,
        }).format(new Date())
    );
    return HourTime ;
}

function updateTimeNow(){
    getClinetDay() ;
    getClinetTime() ;
}


export { HourTime , weekDay , updateDateTime , updateTimeNow , getClinetDay , getClinetTime } 