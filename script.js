let text = document.getElementById('text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    treeLeft.style.left = value * -1.5 + 'px';
    treeRight.style.left = value * 1.5 + 'px';
    gateLeft.style.left = value * 0.5 + 'px';
    gateRight.style.left = value * -0.5 + 'px';
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');

    // Toggle the navigation menu
    hamburger.addEventListener('click', function() {
        navigation.style.transform = navigation.style.transform === 'translateX(0%)' ? 'translateX(100%)' : 'translateX(0%)';
    });

    // Close the menu when a navigation link is clicked
    navigation.addEventListener('click', function(event) {
        // Check if the clicked element is a link
        if (event.target.tagName === 'A') {
            // Hide the navigation menu
            navigation.style.transform = 'translateX(100%)';
        }
    });
});
