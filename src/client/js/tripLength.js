 /* tripLength function: 
Receive user inputted data (trip departure and return dates)
Calculate trip length in days
Render processed info to the UI
*/

const tripLength = (departDate, returnDate) => {
    const tripRangeEle = document.getElementById('trip-length-header')
    const tripRange = document.getElementById('trip-list-wrapper')
    tripRange.classList.toggle('hidden')
    const departDateNumber = new Date(departDate)
    const returnDateNumber = new Date(returnDate)
    const tripDayCount = returnDateNumber.getTime() - departDateNumber.getTime();
    const tripDayUnits = tripDayCount/(1000 * 3600 * 24)
    const tripStart = document.getElementById('trip-start')
    const tripEnd = document.getElementById('trip-end')

    tripRangeEle.innerHTML = `
        <u>Trip length</u> 
          ${tripDayUnits} days 
    `
    tripStart.innerHTML = `
     Departure date: ${departDate}
    `
    tripEnd.innerHTML = `
     Return date: ${returnDate}
    `
}

export { tripLength }