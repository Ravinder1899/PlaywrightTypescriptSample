export default class CommonMethods {
    public static get uniqueValue() {
        const currentDate = new Date();

        // Get day, month, year, hours, minutes, and seconds
        const day = currentDate.getDate().toString().padStart(2, '0');
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const hours = currentDate.getHours().toString().padStart(2, '0');
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const seconds = currentDate.getSeconds().toString().padStart(2, '0');

        // Format the date and time as "ddmm_hhmmss"
        const formattedDateTime = `${day}${month}_${hours}${minutes}${seconds}`;

        return formattedDateTime;
    }
}