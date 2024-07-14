


async function getIngredients(){
    console.log("btee5")
    try{
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        let finalresponse = await response.json()
        console.log(finalresponse)
        displayIngredients(finalresponse)
    }catch(error){

    }
}


function displayIngredients(finalresponse){
    showLoader()
    console.log(finalresponse,"hi from displayIngredients")
    let dataArray = finalresponse.meals;
    console.log(dataArray)

    let cartona = ``
    for(i = 0; i<20;i++){
        cartona += `
        <div class="col-md-3">
            <div onclick="getMealsOfIngredients('${dataArray[i].strIngredient}')" class="rounded-2 text-center cursor-pointer">
                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                <h3>${dataArray[i].strIngredient}</h3>
                <p>${dataArray[i].strDescription.substring(0, 100) + "..."}</p>
            </div>
        </div>
        `
    }
    
    document.querySelector("#myIngredientsData").innerHTML = cartona;
    console.log("hi from ingredienst")
}

async function getMealsOfIngredients(value){
    console.log(value)
    console.log("btee5")
    try{
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${value}`)
        let finalresponse = await response.json()
        console.log(finalresponse)
        displayMealsOfIngredients(finalresponse)
    }catch(error){

    }
}

function displayMealsOfIngredients(finalresponse) {
    showLoader()
    let dataArray = finalresponse.meals;
    console.log(dataArray)
    $("#ingredients").fadeOut(500, function () {
        let cartona = ``
    for (i = 0; i < dataArray.length; i++) {
        cartona += `
            <div class="col-md-3">
                <div onclick = "displayMealDetailOfIngredient('${dataArray[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${dataArray[i].strMealThumb}" alt="">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>${dataArray[i].strMeal}</h3>
                    </div>
                </div>
        </div>
        `
        hideLoader()
        document.querySelector("#rowData").innerHTML = cartona;
    }
    })
}
    


async function displayMealDetailOfIngredient(index) {
    showLoader()
    console.log("hi from displayMealDetailOfIngredient")
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${index}`)
    let finalresponse = await response.json()
    let dataArray = finalresponse.meals[0]
    console.log(dataArray)

    let Recipes = ``
    for (let i = 1; i <= 20; i++) {
        if (dataArray[`strMeasure${i}`] === " " || dataArray[`strMeasure${i}`] === "") {
            break
        }
        Recipes += `<li class="alert alert-info m-2 p-1">${dataArray[`strMeasure${i}`]} ${dataArray[`strIngredient${i}`]}</li>`
    }

console.log(dataArray)
$("#Area").fadeOut(500, function () {
    document.querySelector("#rowData").innerHTML = `
        <div class="col-md-4">
                <img class="w-100 rounded-3" src="${dataArray['strMealThumb']}" alt="">
                    <h2>${dataArray.strMeal}</h2>
            </div>
            <div class="col-md-8">
                <h2>Instructions</h2>
                <p>${dataArray.strInstructions}</p>
                <h3><span class="fw-bolder">Area : </span>${dataArray.strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${dataArray.strCategory}</h3>
                <h3>Recipes :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${Recipes}
                </ul>

                <h3>Tags :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    <li class="alert alert-danger m-2 p-1">${dataArray.strTags}</li>
                </ul>

                <a target="_blank" href="${dataArray.strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${dataArray.strYoutube}" class="btn btn-danger">Youtube</a>
            </div>
    `;
    hideLoader()
})
console.log("hi")
    
}