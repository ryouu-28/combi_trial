document.getElementById('play').addEventListener('click', function() {
    mainMenu = document.querySelector('.mainMenu');
    mainMenu.style.zIndex = 0; 
    mainMenu.style.opacity = 0; 
});


let selectedId; 
let currentChoice = 1; 
let choice1 = document.getElementById("choice-1");
let choice2 = document.getElementById("choice-2");
let currentContainerIndex = 0;
let productResult = document.getElementById('result');
let resultContainer = document.getElementById("picResult");
const options = ["earth", "fire", "water", "paper", "plastic", "food", "wood"];
const clear = document.getElementById("clear");
let containers = document.querySelectorAll(".containers img")
let text = document.getElementById('text');


function initializeMenu() {
    const menu = document.getElementById("group");
    menu.innerHTML = '';
    
    options.forEach(option => {
        let menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        let choice = document.createElement("img");
        choice.id = option;
        choice.src = "img/" + option + ".png";
        choice.alt = option;
        choice.addEventListener("click", selectChoice);

        let elementName = document.createElement("p");
        elementName.innerHTML = option;

        menuItem.appendChild(choice);
        menuItem.appendChild(elementName);
        menu.appendChild(menuItem);

        console.log(option);
    });
}


function addResult(newProduct) {
    if (newProduct != "unknown"){
    resultContainer.src = "img/" + newProduct + ".png";
    resultContainer.alt = newProduct;
    resultContainer.style.transform = "scale(1)";
    resultContainer.style.opacity = 1;
    resultContainer.style.transition = "opacity 0.7s ease"
    text.innerText = 'You created ' + newProduct;
    } else {
    resultContainer.src = "img/x.png";
    resultContainer.alt = "Unknown Combination";
    resultContainer.style.transform = "scale(1)";
    resultContainer.style.opacity = 1;
    resultContainer.style.transition = "opacity 0.7s ease"
    
    text.innerText = "Don't try this at home"; 
    }
   
}
window.onload = initializeMenu;

function selectChoice() {
    selectedId = this.id; 
    let choiceElement = document.getElementById(`choice-${currentChoice}`);
    if (choiceElement) {
        choiceElement.src = "img/" + selectedId + ".png";
        choiceElement.setAttribute('data-selected', 'true');
        choiceElement.alt = selectedId;
    }
    currentChoice++;

    if (choice1.getAttribute('data-selected') && choice2.getAttribute('data-selected')) {
        result(choice1, choice2);
    }

    animateContainer(currentContainerIndex);
    currentContainerIndex++;

}

function animateContainer(index) {
    if (index < containers.length) {
        let container = containers[index];
        container.style.transition = "transform 0.3s ease, opacity 0.3s ease";
        container.style.transform = "scale(1)";
        container.style.opacity = 1;

    }
}

function result(choice1, choice2) {
    let att1 = choice1.alt;
    let att2 = choice2.alt;
    let combination = att1 + '-' + att2;

    switch (combination) {
        // Positive Combinations from Base Elements
        case 'water-fire':
        case 'fire-water':
            if (!options.includes("steam")) {
                options.push("steam");
                console.log(options);
                addResult("steam");
                initializeMenu(); 
            }
            break;
        case 'water-earth':
        case 'earth-water':
            if (!options.includes("mud")) {
                options.push("mud");
                console.log(options);
                addResult("mud");
                initializeMenu(); 
            }
            break;
        case 'water-food':
        case 'food-water':
            if (!options.includes("compost tea")) {
                options.push("compost tea");
                console.log(options);
                addResult("compost tea");
                initializeMenu(); 
            }
            break;
        case 'water-paper':
        case 'paper-water':
            if (!options.includes("paper mache pulp")) {
                options.push("paper mache pulp");
                console.log(options);
                addResult("paper mache pulp");
                initializeMenu(); 
            }
            break;
        case 'fire-wood':
        case 'wood-fire':
            if (!options.includes("charcoal")) {
                options.push("charcoal");
                console.log(options);
                addResult("charcoal");
                initializeMenu(); 
            }
            break;
        case 'fire-plastic':
        case 'plastic-fire':
            if (!options.includes("molten plastic")) {
                options.push("molten plastic");
                console.log(options);
                addResult("molten plastic");
                initializeMenu(); 
            }
            break;
        case 'earth-food':
        case 'food-earth':
            if (!options.includes("compost")) {
                options.push("compost");
                console.log(options);
                addResult("compost");
                initializeMenu(); 
            }
            break;
        case 'earth-plastic':
        case 'plastic-earth':
            if (!options.includes("buried plastic")) {
                options.push("buried plastic");
                console.log(options);
                addResult("buried plastic");
                initializeMenu(); 
            }
            break;
        case 'earth-paper':
        case 'paper-earth':
            if (!options.includes("recycled paper")) {
                options.push("recycled paper");
                console.log(options);
                addResult("recycled paper");
                initializeMenu(); 
            }
            break;
        case 'food-paper':
        case 'paper-food':
            if (!options.includes("biodegradable waste")) {
                options.push("biodegradable waste");
                console.log(options);
                addResult("biodegradable waste");
                initializeMenu(); 
            }
            break;
        case 'plastic-paper':
        case 'paper-plastic':
            if (!options.includes("composite boards")) {
                options.push("composite boards");
                console.log(options);
                addResult("composite boards");
                initializeMenu(); 
            }
            break;

        // Positive Combinations from Product 2
        case 'steam-mud':
        case 'mud-steam':
            if (!options.includes("recycled water")) {
                options.push("recycled water");
                console.log(options);
                addResult("recycled water");
                initializeMenu(); 
            }
            break;
        case 'steam-wet plastic':
        case 'wet plastic-steam':
            if (!options.includes("clean plastic")) {
                options.push("clean plastic");
                console.log(options);
                addResult("clean plastic");
                initializeMenu(); 
            }
            break;
        case 'mud-compost tea':
        case 'compost tea-mud':
            if (!options.includes("enriched soil")) {
                options.push("enriched soil");
                console.log(options);
                addResult("enriched soil");
                initializeMenu(); 
            }
            break;
        case 'mud-paper mache pulp':
        case 'paper mache pulp-mud':
            if (!options.includes("mud bricks")) {
                options.push("mud bricks");
                console.log(options);
                addResult("mud bricks");
                initializeMenu(); 
            }
            break;
        case 'compost tea-paper mache pulp':
        case 'paper mache pulp-compost tea':
            if (!options.includes("fertilizer")) {
                options.push("fertilizer");
                console.log(options);
                addResult("fertilizer");
                initializeMenu(); 
            }
            break;
        case 'compost-biodegradable waste':
        case 'biodegradable waste-compost':
            if (!options.includes("super compost")) {
                options.push("super compost");
                console.log(options);
                addResult("super compost");
                initializeMenu(); 
            }
            break;
        case 'wet paper-food':
        case 'food-wet paper':
            if (!options.includes("paper mache seedling pot")) {
                options.push("paper mache seedling pot");
                console.log(options);
                addResult("paper mache seedling pot");
                initializeMenu(); 
            }
            break;
        case 'composite boards-organic compost':
        case 'organic compost-composite boards':
            if (!options.includes("eco-friendly garden beds")) {
                options.push("eco-friendly garden beds");
                console.log(options);
                addResult("eco-friendly garden beds");
                initializeMenu(); 
            }
            break;
        case 'plastic-organics':
        case 'organics-plastic':
            if (!options.includes("vertical garden with plastic bottles")) {
                options.push("vertical garden with plastic bottles");
                console.log(options);
                addResult("vertical garden with plastic bottles");
                initializeMenu(); 
            }
            break;

        default:
            addResult("unknown");

    }
}
clear.addEventListener('click', clearSRC)

function clearSRC(){
    choice1.src = "img/frame.png"
    choice2.src = "img/frame.png"
    choice1.alt = ""
    choice2.alt = ""
    resultContainer.src = "img/frame.png"
    resultContainer.alt = ""
    resultContainer.style.transition = "opacity 0s ease"
    resultContainer.style.transform = "scale(0)";
    resultContainer.style.opacity = 0;
    choice1.removeAttribute('data-selected');
    choice2.removeAttribute('data-selected');

    containers.forEach(container => {
        container.style.transition = "transform 0.3s ease, opacity 0s ease";
        container.style.transform = "scale(0)";
        container.style.opacity = 0;});
        currentContainerIndex = 0;

    currentChoice = 1;
    
    text.innerText = '';

}
