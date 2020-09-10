function list(json){
    let result = "<tr><td><h4>Ingredients</h4></td><td><h4>Amount</h4></td></tr>"
    const arr = []
    let i = 0

    for(prop in json.meals[0]){
        arr[i] = json.meals[0][prop]
        i++
    }

    for(i = 9; i <= 28; i++){
        if(arr[i].length > 1) result += "<tr><td width='50%'>"+ arr[i] +"</td><td width='50%'>"+ arr[i+20] +"</td></tr>"
    }

    return result;
}

for(let i = 0; i < 5; i++){
    let day = "";

    switch(i){
        case 0: day = "Monday"; break;
        case 1: day = "Tuesday"; break;
        case 2: day = "Wednesday"; break;
        case 3: day = "Thursday"; break;
        case 4: day = "Friday"; break;
    }

    fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(res => res.json()).then(json => {
        document.querySelector("main").innerHTML += "<div class='receitas'><table width='100%'><tr><td><h2>"+ json.meals[0].strMeal + " - " + day + "</h2></td></tr><tr><td width='50%'>Category: "+ json.meals[0].strCategory +"</td><td width='50%'>Area: "+ json.meals[0].strArea +"</td></tr><tr><td colspan='2'><img src='"+ json.meals[0].strMealThumb +"' width='300px'></td></tr>"+ list(json) +"<tr><td colspan='2'><h4>How to</h4></td></tr><tr><td colspan='2' style='text-align: justify'>"+ json.meals[0].strInstructions +"</td></tr></table></div>"
    });
}