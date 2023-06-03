const HourTime = Number(
    Intl.DateTimeFormat('en', {
        hour: 'numeric',
        hour12: false,
    }).format(new Date())
);

const weekDay = Intl.DateTimeFormat(Intl.Locale.current, {
    weekday: 'long',
}).format(new Date());

export { HourTime , weekDay } 