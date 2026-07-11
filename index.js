function checkPassword() {
    const checkbox = document.getElementById("password");

    if (checkbox.checked) {
        localStorage.setItem("authenticated", "true");
        window.location.href = "Home.html";
    } else {
        alert("Wrong box...right? :( ");
    }
}

// Function to generate hearts at random positions
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Random position on the screen
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 5 + 5 + 's'; // Random float time
    
    document.querySelector('.heart-background').appendChild(heart);

    // Remove the heart after it completes its animation
    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Generate hearts periodically
setInterval(createHeart, 500); // Generates a heart every 0.5 second


//Makes checkboxes act like radio buttons
const yes = document.getElementById("password");
const no = document.getElementById("password2");

yes.addEventListener("change", function () {
    if (this.checked) {
        no.checked = false;
    }
});

no.addEventListener("change", function () {
    if (this.checked) {
        yes.checked = false;
    }
});


const noCheckbox = document.getElementById('password2');
const container = document.querySelector('.checkbox-container');

noCheckbox.addEventListener('mouseenter', () => {
    const containerRect = container.getBoundingClientRect();

    // random offset within the container bounds, biased away from center
    const maxX = containerRect.width / 2 - 20;
    const maxY = 15;

    const dodgeX = (Math.random() > 0.5 ? 1 : -1) * (40 + Math.random() * maxX);
    const dodgeY = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * maxY);

    noCheckbox.style.transform = `translate(${dodgeX}px, ${dodgeY}px)`;
});

// Optional: reset position if the mouse leaves the whole container
container.addEventListener('mouseleave', () => {
    noCheckbox.style.transform = 'translate(0, 0)';
});