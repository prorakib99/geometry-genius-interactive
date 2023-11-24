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
function geometryFirstSection(elementField1, elementField2, textId1, textId2, editElementId){

    const firstInput = getValueById(elementField1);
    const secondInput = getValueById(elementField2);

    setTextById(textId1, firstInput);
    setTextById(textId2, secondInput);

    const inputText = getElement(editElementId);
    inputText.style.display = 'block';
}

// shortcut function 2
function geometrySecondSection(elementName, elementFormId, result){
    const getGeometryTitle = getElementText(elementName);
    
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
    
    const elementForm = getElement(elementFormId);
    elementForm.style.display = 'none';
}

// Shortcut function for edit button
function editButton(elementFormId, elementField1, checkBtn, elementText){
    const elementForm = getElement(elementFormId);
    elementForm.style.display = 'block';

    const getFieldA = getElement(elementField1)
    getFieldA.focus();

    const getCheckBtn = getElement(checkBtn);
    getCheckBtn.style.display = 'block';

    const getEditBtn = getElement(elementText);
    getEditBtn.style.display = 'none';
}

// Shortcut function for check button
function checkButton(elementField1, elementField2, elementText1, elementText2, elementText, elementFormId){
    const firstInput = getValueById(elementField1);
    const secondInput = getValueById(elementField2);

    setTextById(elementText1, firstInput);
    setTextById(elementText2, secondInput);

    const getEditBtn = getElement(elementText);
    getEditBtn.style.display = 'block';

    const elementForm = getElement(elementFormId);
    elementForm.style.display = 'none';
}

// Triangle Start
document.getElementById('btn-triangle').addEventListener('click', function(){
    
    const firstInput = getValueById('triangle-field-a');
    const secondInput = getValueById('triangle-field-b');

    if(isNaN(firstInput) || isNaN(secondInput)){
        alert('Please Enter number value.');
        return;
    }

    geometryFirstSection('triangle-field-a', 'triangle-field-b', 'triangle-text-a', 'triangle-text-b', 'triangle-text');

    const getFirstValue = getTextValueById('triangle-text-a');
    const getSecondValue = getTextValueById('triangle-text-b');

    const result = (0.5 * getFirstValue * getSecondValue).toFixed(2);

    geometrySecondSection('triangle', 'triangle-form', result);

    // const getGeometryTitle = getElementText('triangle');
    
    // const calculation = getElement('calculation');
    // const calculateList = document.createElement('li');
    // calculateList.innerHTML = 
    // `
    // <div class="flex justify-between flex-wrap gap-4 items-center">
    //     <p class="text-[#414141] text-base font-normal">${getGeometryTitle}</p>
    //     <p>${result}cm<sup>2</sup></p>
    //     <button class="text-sm text-white bg-[#1090D8] rounded px-3 py-1">Convert to m<sup>2</sup></button>
    // </div>
    // `;
    // calculation.appendChild(calculateList);
    
    // const elementForm = getElement('triangle-form');
    // elementForm.style.display = 'none';

    

})

document.getElementById('triangle-edit').addEventListener('click', function(){

    // const elementForm = getElement('triangle-form');
    // elementForm.style.display = 'block';

    // const getFieldA = getElement('triangle-field-a')
    // getFieldA.focus();

    // const getCheckBtn = getElement('triangle-check');
    // getCheckBtn.style.display = 'block';

    // const getEditBtn = getElement('triangle-text');
    // getEditBtn.style.display = 'none';

    editButton('triangle-form', 'triangle-field-a', 'triangle-check', 'triangle-text');
    
})

document.getElementById('triangle-check').addEventListener('click', function(){
    // const firstInput = getValueById('triangle-field-a');
    // const secondInput = getValueById('triangle-field-b');

    // setTextById('triangle-text-a', firstInput);
    // setTextById('triangle-text-b', secondInput);

    // const getEditBtn = getElement('triangle-text');
    // getEditBtn.style.display = 'block';

    // const elementForm = getElement('triangle-form');
    // elementForm.style.display = 'none';

    const firstInput = getValueById('triangle-field-a');
    const secondInput = getValueById('triangle-field-b');

    if(isNaN(firstInput) || isNaN(secondInput)){
        alert('Please Enter number value.');
        return;
    }

    checkButton('triangle-field-a', 'triangle-field-b', 'triangle-text-a', 'triangle-text-b', 'triangle-text', 'triangle-form');
})

// Triangle end

// Rectangle Start
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const firstInput = getValueById('rectangle-field-a');
    const secondInput = getValueById('rectangle-field-b');

    if(isNaN(firstInput) || isNaN(secondInput)){
        alert('Please Enter number value.');
        return;
    }

    geometryFirstSection('rectangle-field-a', 'rectangle-field-b', 'rectangle-text-a', 'rectangle-text-b', 'rectangle-text');

    const getFirstValue = getTextValueById('rectangle-text-a');
    const getSecondValue = getTextValueById('rectangle-text-b');
    const result = (getFirstValue * getSecondValue).toFixed(2);

    geometrySecondSection('rectangle', 'rectangle-form', result);
})

document.getElementById('rectangle-edit').addEventListener('click', function(){
    editButton('rectangle-form', 'rectangle-field-a', 'rectangle-check', 'rectangle-text');
})

document.getElementById('rectangle-check').addEventListener('click', function(){
    const firstInput = getValueById('rectangle-field-a');
    const secondInput = getValueById('rectangle-field-b');

    if(isNaN(firstInput) || isNaN(secondInput)){
        alert('Please Enter number value.');
        return;
    }

    checkButton('rectangle-field-a', 'rectangle-field-b', 'rectangle-text-a', 'rectangle-text-b', 'rectangle-text', 'rectangle-form');
})
// Rectangle End

// parallelogram Start
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const firstInput = getValueById('parallelogram-field-a');
    const secondInput = getValueById('parallelogram-field-b');

    if(isNaN(firstInput) || isNaN(secondInput)){
        alert('Please Enter number value.');
        return;
    }

    geometryFirstSection('parallelogram-field-a', 'parallelogram-field-b', 'parallelogram-text-a', 'parallelogram-text-b', 'parallelogram-text');

    const getFirstValue = getTextValueById('parallelogram-text-a');
    const getSecondValue = getTextValueById('parallelogram-text-b');
    const result = (getFirstValue * getSecondValue).toFixed(2);

    geometrySecondSection('parallelogram', 'parallelogram-form', result);
})

document.getElementById('parallelogram-edit').addEventListener('click', function(){
    editButton('parallelogram-form', 'parallelogram-field-a', 'parallelogram-check', 'parallelogram-text');
})

document.getElementById('parallelogram-check').addEventListener('click', function(){
    const firstInput = getValueById('parallelogram-field-a');
    const secondInput = getValueById('parallelogram-field-b');

    if(isNaN(firstInput) || isNaN(secondInput)){
        alert('Please Enter number value.');
        return;
    }

    checkButton('parallelogram-field-a', 'parallelogram-field-b', 'parallelogram-text-a', 'parallelogram-text-b', 'parallelogram-text', 'parallelogram-form');
})
// parallelogram End

// rhombus Start
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const firstInput = getValueById('rhombus-field-a');
    const secondInput = getValueById('rhombus-field-b');

    if(isNaN(firstInput) || isNaN(secondInput)){
        alert('Please Enter number value.');
        return;
    }

    geometryFirstSection('rhombus-field-a', 'rhombus-field-b', 'rhombus-text-a', 'rhombus-text-b', 'rhombus-text');

    const getFirstValue = getTextValueById('rhombus-text-a');
    const getSecondValue = getTextValueById('rhombus-text-b');
    const result = (0.5 * getFirstValue * getSecondValue).toFixed(2);

    geometrySecondSection('rhombus', 'rhombus-form', result);
})

document.getElementById('rhombus-edit').addEventListener('click', function(){
    editButton('rhombus-form', 'rhombus-field-a', 'rhombus-check', 'rhombus-text');
})

document.getElementById('rhombus-check').addEventListener('click', function(){
    const firstInput = getValueById('rhombus-field-a');
    const secondInput = getValueById('rhombus-field-b');

    if(isNaN(firstInput) || isNaN(secondInput)){
        alert('Please Enter number value.');
        return;
    }

    checkButton('rhombus-field-a', 'rhombus-field-b', 'rhombus-text-a', 'rhombus-text-b', 'rhombus-text', 'rhombus-form');
})
// rhombus End

// pentagon Start
document.getElementById('btn-pentagon').addEventListener('click', function(){
    const firstInput = getValueById('pentagon-field-a');
    const secondInput = getValueById('pentagon-field-b');

    if(isNaN(firstInput) || isNaN(secondInput)){
        alert('Please Enter number value.');
        return;
    }

    geometryFirstSection('pentagon-field-a', 'pentagon-field-b', 'pentagon-text-a', 'pentagon-text-b', 'pentagon-text');

    const getFirstValue = getTextValueById('pentagon-text-a');
    const getSecondValue = getTextValueById('pentagon-text-b');
    const result = (0.5 * getFirstValue * getSecondValue).toFixed(2);

    geometrySecondSection('pentagon', 'pentagon-form', result);
})

document.getElementById('pentagon-edit').addEventListener('click', function(){
    editButton('pentagon-form', 'pentagon-field-a', 'pentagon-check', 'pentagon-text');
})

document.getElementById('pentagon-check').addEventListener('click', function(){
    const firstInput = getValueById('pentagon-field-a');
    const secondInput = getValueById('pentagon-field-b');

    if(isNaN(firstInput) || isNaN(secondInput)){
        alert('Please Enter number value.');
        return;
    }

    checkButton('pentagon-field-a', 'pentagon-field-b', 'pentagon-text-a', 'pentagon-text-b', 'pentagon-text', 'pentagon-form');
})
// pentagon End

// ellipse Start
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const firstInput = getValueById('ellipse-field-a');
    const secondInput = getValueById('ellipse-field-b');

    if(isNaN(firstInput) || isNaN(secondInput)){
        alert('Please Enter number value.');
        return;
    }

    geometryFirstSection('ellipse-field-a', 'ellipse-field-b', 'ellipse-text-a', 'ellipse-text-b', 'ellipse-text');

    const getFirstValue = getTextValueById('ellipse-text-a');
    const getSecondValue = getTextValueById('ellipse-text-b');
    const result = (Math.PI * getFirstValue * getSecondValue).toFixed(2);

    geometrySecondSection('ellipse', 'ellipse-form', result);
})

document.getElementById('ellipse-edit').addEventListener('click', function(){
    editButton('ellipse-form', 'ellipse-field-a', 'ellipse-check', 'ellipse-text');
})

document.getElementById('ellipse-check').addEventListener('click', function(){
    const firstInput = getValueById('ellipse-field-a');
    const secondInput = getValueById('ellipse-field-b');

    if(isNaN(firstInput) || isNaN(secondInput)){
        alert('Please Enter number value.');
        return;
    }

    checkButton('ellipse-field-a', 'ellipse-field-b', 'ellipse-text-a', 'ellipse-text-b', 'ellipse-text', 'ellipse-form');
})
// ellipse End