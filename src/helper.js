export const api = 'd3923c5694bc4b82d7ba298b642463fd';
export const forecastApi = '8ecc9ff3055d49bf95170309230106';

export function getTime(timeMark) {
   let time = new Date(timeMark * 1000);
   return formatTime(time);
}

export function formatTime(time, utc) {
   let hour = time.getHours();
   let minute = time.getMinutes();

   if (utc) {
      hour = time.getHours() + utc;
   }
   if (hour < 10) {
      hour = '0' + hour;
   }
   if (minute < 10) {
      minute = '0' + minute;
   }

   return `${hour}:${minute}`;
}
