const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const weightStatus = document.querySelector('#weightStatus') 
    if (height === '' || height <0 || isNaN(height)) {
        results.innerHTML = 'Please give a valid height';
        weightStatus.innerHTML="";
    }else if (weight === '' || weight <0 || isNaN(weight)) {
        results.innerHTML = 'Please give a valid weight';
        weightStatus.innerHTML="";
    }else{
        const bmi = (weight /( (height*height)/10000)).toFixed(2);
        //shows the result
        results.innerHTML = `<span>${bmi}</span>`;
    
    if(bmi < 18.6){
      weightStatus.innerHTML = 'You are Under Weight';
      
    }else if(bmi >= 18.6 || bmi <= 24.9){
       weightStatus.innerHTML = "You have normal weight";
    }else{
       weightStatus.innerHTML = "You have over weight";
    }
}
});