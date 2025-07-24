// Story elements arrays
const animals = ['cat', 'dog', 'elephant', 'monkey', 'penguin', 'dragon', 'unicorn', 'robot'];
const places = ['park', 'moon', 'kitchen', 'library', 'circus', 'beach', 'castle', 'spaceship'];
const actions = ['dancing', 'singing', 'flying', 'cooking', 'reading', 'jumping', 'sleeping', 'laughing'];
const objects = ['banana', 'hat', 'book', 'cake', 'balloon', 'flower', 'pizza', 'rainbow'];
const adjectives = ['funny', 'silly', 'crazy', 'magical', 'colorful', 'tiny', 'giant', 'sparkly'];

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateStory() {
    const name = document.getElementById('nameInput').value.trim();
    
    if (!name) {
        alert('Please enter a name first!');
        return;
    }
    
    // Get random story elements
    const animal = getRandomItem(animals);
    const place = getRandomItem(places);
    const action = getRandomItem(actions);
    const object = getRandomItem(objects);
    const adjective = getRandomItem(adjectives);
    
    // Create the story
    const story = `Once upon a time, ${name} met a ${adjective} ${animal} at the ${place}. 
    The ${animal} was ${action} with a ${object}! ${name} decided to join in the fun. 
    They ${action} together all day long and became the best of friends. 
    From that day on, ${name} and the ${adjective} ${animal} had many more adventures!`;
    
    // Display the story
    document.getElementById('storyBox').innerHTML = story;
    document.getElementById('copyBtn').disabled = false;
}

function copyStory() {
    const storyText = document.getElementById('storyBox').innerText;
    
    navigator.clipboard.writeText(storyText).then(() => {
        const copyBtn = document.getElementById('copyBtn');
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = 'Copy Story';
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = storyText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const copyBtn = document.getElementById('copyBtn');
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = 'Copy Story';
        }, 2000);
    });
}

// Allow generating story by pressing Enter
document.getElementById('nameInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        generateStory();
    }
});