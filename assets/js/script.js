// Get integer value from input field function
function getValueById(elementId){
    const getValue = document.getElementById(elementId);
    const valueString = getValue.value;
    const valueInt = parseFloat(valueString);
    return valueInt;
}

// Get Text from HTML element function
function getElement(elementId){
    const getText = document.getElementById(elementId);
    return getText;
}

// Get Element InnerText By Id Function 
function getElementText(elementId){
    const getElement = document.getElementById(elementId);
    const getText = getElement.innerText;
    return getText;
}

// Get Text integer Value from HTML element function
function getTextValueById(elementId){
    const getText = document.getElementById(elementId);
    const textValueString = getText.innerText;
    const textValue = parseFloat(textValueString);
    return textValue;
}

// Set innerText on this function
function setTextById(elementId, setValue){
    const getText = document.getElementById(elementId);
    getText.innerText = setValue;
}

// Shortcut function 
function geometryFirstSection(inputId1, inputId2, textId1, textId2, editElementId){
    const firstInput = getValueById(inputId1);
    const secondInput = getValueById(inputId2);

    if(isNaN(firstInput) || isNaN(secondInput)){
        alert('Please Enter number value.')
        return
    }

    setTextById(textId1, firstInput);
    setTextById(textId2, secondInput);

    const inputText = getElement(editElementId);
    inputText.style.display = 'block';
}



document.getElementById('btn-triangle').addEventListener('click', function(){
    
    geometryFirstSection('triangle-field-a', 'triangle-field-b', 'triangle-text-b', 'triangle-text-h', 'triangle-text');

    const getFirstValue = getTextValueById('triangle-text-b');
    const getSecondValue = getTextValueById('triangle-text-h');

    const result = 0.5 * getFirstValue * getSecondValue;

    const getGeometryTitle = getElementText('triangle');
    
    const calculation = getElement('calculation');
    const calculateList = document.createElement('li');
    calculateList.innerHTML = 
    `
    <div class="flex justify-between flex-wrap gap-4 items-center">
        <p class="text-[#414141] text-base font-normal">${getGeometryTitle}</p>
        <p>${result}cm<sup>2</sup></p>
        <button class="text-sm text-white bg-[#1090D8] rounded px-3 py-1">Convert to m<sup>2</sup></button>
    </div>
    `;
    calculation.appendChild(calculateList);
    
    const elementForm = getElement('trianlge-form');
    elementForm.style.display = 'none';

})

document.getElementById('triangle-edit').addEventListener('click', function(){

    const elementForm = getElement('trianlge-form');
    elementForm.style.display = 'block';

    const getFieldA = getElement('triangle-field-a')
    getFieldA.focus();

    const getCheckBtn = getElement('triangle-check');
    getCheckBtn.style.display = 'block';

    const getEditBtn = getElement('triangle-text');
    getEditBtn.style.display = 'none';
    
})


document.getElementById('triangle-check').addEventListener('click', function(){
    const firstInput = getValueById('triangle-field-a');
    const secondInput = getValueById('triangle-field-b');

    setTextById('triangle-text-b', firstInput);
    setTextById('triangle-text-h', secondInput);

    const getEditBtn = getElement('triangle-text');
    getEditBtn.style.display = 'block';

    const elementForm = getElement('trianlge-form');
    elementForm.style.display = 'none';
    
})