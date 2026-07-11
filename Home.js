console.log("index.js loaded");

/*TIMER*/
function calculateTimePassed() {
    const startDate = new Date('2026-09-05T00:00:00'); // Set the reference date
    const currentDate = new Date(); // Current date and time

    // Calculate the difference in years, months, and days
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    let days = currentDate.getDate() - startDate.getDate();

    // Adjust for negative days and months
    if (days < 0) {
        months--;
        const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        days += previousMonth;
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }

    // Calculate hours, minutes, and seconds
    const timeDifference = currentDate - startDate;
    const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);

    // Update the timer with flipping effect
    updateTimer('years', years);
    updateTimer('months', months);
    updateTimer('days', days);
    updateTimer('hours', hours);
    updateTimer('minutes', minutes);
    updateTimer('seconds', seconds);
}

function updateTimer(unit, value) {
    const element = document.getElementById(unit);
    
    // Only update the timer if the value has changed
    const oldValue = element.firstChild.textContent.trim(); // Get the current number

    // Ensure the value is a number and not NaN
    if (oldValue !== value.toString()) {
        // Update the inner HTML for the flip effect
        element.innerHTML = `<div>${oldValue}</div><div class="flip-card">${value}</div><span>${unit}</span>`;
        
        
    }
}

// Update the time passed every second
setInterval(calculateTimePassed, 1000);

// Initial call to show the time immediately when the page loads
calculateTimePassed();



/*LETTER*/
// Letter Navigation Logic
const letterPages = document.querySelectorAll('.letter-page');
let currentPageIndex = 0;

function showPage(index) {
    letterPages.forEach((page, i) => {
        page.classList.toggle('active', i === index);
    });
}

// Event listeners for navigation buttons
document.getElementById('prev').addEventListener('click', () => {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        showPage(currentPageIndex);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPageIndex < letterPages.length - 1) {
        currentPageIndex++;
        showPage(currentPageIndex);
    }
});

// Initially show the first page
showPage(currentPageIndex);

