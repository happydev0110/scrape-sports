export const isValidDate = (dateString) => {
    const dateObject = new Date(dateString);
    return !isNaN(dateObject) && dateString.trim() !== '';
}

export const formatDate = (date) => {
    var year, month, day = '';
    if (isValidDate(date)) {
        // console.log(`${date} is a valid date.`);
        return 'Valid Date.'
    } else {
        // console.log(`${inputDate} is not a valid date.`);
        year = date.getYear();
        month = date.getMonth();
        day = date.getDay();
        console.log()
    }
}
