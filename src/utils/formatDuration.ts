const LEADING_ZERO_FORMATTER = new Intl.NumberFormat(undefined, {minimumIntegerDigits: 2})

export function formatDuration(duartion: number) {
 const hours = Math.floor(duartion / 60 /60 );
 const minutes = Math.floor((duartion - hours * 60 * 60) / 60);
 const seconds = duartion % 60;

 if (hours > 0) {
    return `${hours}:${LEADING_ZERO_FORMATTER.format(minutes)}:${LEADING_ZERO_FORMATTER.format(seconds)}`;
 }

 return `${minutes}:${LEADING_ZERO_FORMATTER.format(seconds)}`;
}