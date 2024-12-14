
let activeCard = null;

// Function to show form only after clicking View
function viewCard(cardId) {
    const card = document.getElementById('card' + cardId);
    const form = document.getElementById('form' + cardId);
    const overlay = document.getElementById('overlay');

    // If the card is already active, close it (i.e., return to Web Design Overview)
    if (card.classList.contains('active')) {
        closeCard();
    } else {
        closeCard();
        activeCard = card;
        
        // Show the card and form
        card.classList.add('active');
        if (form) form.classList.add('active');
        
        // Show overlay
        overlay.style.display = 'block';
    }
}

function closeCard() {
    const overlay = document.getElementById('overlay');
    if (activeCard) {
        activeCard.classList.remove('active');
        const form = activeCard.querySelector('.contact-form');
        if (form) form.classList.remove('active');
    }
    activeCard = null;
    overlay.style.display = 'none';
}

function submitForm(cardId) {
    alert('Form for Card ' + cardId + ' submitted!');
}

