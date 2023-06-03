const locale = new Intl.DateTimeFormat().resolvedOptions().locale;
// system local

const HourTime = Number(
    Intl.DateTimeFormat('en', {
        hour: 'numeric',
        hour12: false,
    }).format(new Date())
);

const weekDay = Intl.DateTimeFormat(locale , {
    weekday: 'long',
}).format(new Date());

export { HourTime , weekDay } 