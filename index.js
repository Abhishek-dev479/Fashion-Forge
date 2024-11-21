const patterns = ["Stripes", "Dots", "Plain", "Floral", "Checkered", "Geometric"];
const garments = ["T-Shirt", "Hoodie", "Trousers", "Jacket", "Dress", "Skirt", "Kurta"];
const fabrics = ["Cotton", "Polyester", "Silk", "Wool", "Linen", "Denim"];

// Function to dynamically populate dropdowns
function populateDropdown(dropdownId, optionsArray) {
    const dropdown = document.getElementById(dropdownId);

    optionsArray.forEach(option => {
        const optElement = document.createElement('option');
        optElement.value = option.toLowerCase(); // Set value in lowercase
        optElement.textContent = option; // Display text
        dropdown.appendChild(optElement);
    });
}

// Populate the dropdowns dynamically
populateDropdown('pattern', patterns);
populateDropdown('garment', garments);
populateDropdown('fabric', fabrics);

// Initialize the Pickr color picker (but don't show it by default)
const pickr = Pickr.create({
    el: '#color-picker',
    theme: 'classic',
    default: '#f0f0f0',
    swatches: [
        '#F44336', '#E91E63', '#9C27B0', '#673AB7',
        '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4',
        '#009688', '#4CAF50', '#8BC34A', '#CDDC39',
        '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'
    ],
    components: {
        preview: true,
        opacity: true,
        hue: true,
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            input: true,
            // clear: true,
            // save: true
        }
    }
});

// Hide Pickr until the color-picker div is clicked
pickr.hide();  // Hide the color picker initially

// Add click event to the color-picker element to show the Pickr color picker
document.getElementById('color-display').addEventListener('click', () => {
    pickr.show();  // Show the color picker on click
});

// Event listener to handle the color change
pickr.on('change', (color) => {
    const selectedColor = color.toHEXA().toString();  // Get selected color in HEX format
    const colorPickerDiv = document.getElementById('color-display');
    const image = document.getElementById('image');
    
    // Update the div's background color
    image.style.display = 'none';
    colorPickerDiv.style.backgroundColor = selectedColor;
    
    // Optionally, display the color code inside the div
    // colorPickerDiv.textContent = selectedColor;
});


function getSelections() {
    const selectedColor = pickr.getColor().toHEXA().toString();
    const selectedPattern = document.getElementById('pattern').value;
    const selectedGarment = document.getElementById('garment').value;
    const selectedFabric = document.getElementById('fabric').value;

    // const displayDiv = document.getElementById('display-selections');
    // displayDiv.innerHTML = `
    //     <p><strong>Color:</strong> ${selectedColor}</p>
    //     <p><strong>Pattern:</strong> ${selectedPattern}</p>
    //     <p><strong>Garment:</strong> ${selectedGarment}</p>
    //     <p><strong>Fabric:</strong> ${selectedFabric}</p>
    // `;
}

// Event listener to submit selections
document.getElementById('submit-button').addEventListener('click', getSelections);