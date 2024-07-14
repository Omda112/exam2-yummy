
let searchByName = document.querySelector("#searchByName")
let searchByFirstLetter = document.querySelector("#seaechByFirstLetter")
let dataArray
async function getByName(value) {
    showLoader()
    console.log("grtbyname")
    try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
        let finalresponse = await response.json()
        console.log(finalresponse)
        displaySearch(finalresponse)
    } catch (error) {
        
    }
    hideLoader()
}

async function displaySearch(finalresponse) {
    dataArray = finalresponse.meals;

    let cartona = ``
    for (i = 0; i < dataArray.length; i++) {
        cartona += `
            <div class="col-md-3 cursor-pointer">
                    <div onclick="displayMealDetail(${i})" class="card position-relative">
                        <img src="${dataArray[i].strMealThumb}" class="card-img-top overflow-hidden" alt="...">
                        <div class="card-body position-absolute d-flex align-items-center p-2">
                        <h3 class="card-text">${dataArray[i].strMeal}</h3>
                        </div>
                    </div>
                </div>
        `
        console.log(i)

    }
    document.querySelector("#mySearchData").innerHTML = cartona;
}

searchByName.addEventListener("input", function () {
    getByName(searchByName.value)
})

searchByFirstLetter.addEventListener("input", function () {
    getByFirstLetter(searchByFirstLetter.value)
})

$(".open-close-icon").on("click", function (e) {
    console.log("btee5")
    if ($(".side-nav-menu").css("left") == "0px") {
        $(".side-nav-menu").animate({ left: `-${$(".nav-tab").innerWidth()}px` }, 1000)
    } else {
        $(".side-nav-menu").animate({ left: `0px` }, 1000)
    }
})

async function getByFirstLetter(value) {
    showLoader()    
    try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`)
        let finalresponse = await response.json()
        displaySearch(finalresponse)
        console.log(finalresponse)
    } catch (error) {

    }
    hideLoader()
}

function displayMealDetail(index) {
    showLoader()
    console.log(dataArray)
    let Recipes = ``
    for (let i = 1; i <= 20; i++) {
        if(dataArray[index][`strMeasure${i}`] == " " || dataArray[index][`strMeasure${i}`] == "" ){
            break
        }
        Recipes += `<li class="alert alert-info m-2 p-1">${dataArray[index][`strMeasure${i}`]} ${dataArray[index][`strIngredient${i}`]}</li>`
    }

    console.log(dataArray)
    $("#search").fadeOut(500,function(){
        document.querySelector("#rowData").innerHTML = `
        <div class="col-md-4">
                <img class="w-100 rounded-3" src="${dataArray[index].strMealThumb}" alt="">
                    <h2>${dataArray[index].strMeal}</h2>
            </div>
            <div class="col-md-8">
                <h2>Instructions</h2>
                <p>${dataArray[index].strInstructions}</p>
                <h3><span class="fw-bolder">Area : </span>${dataArray[index].strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${dataArray[index].strCategory}</h3>
                <h3>Recipes :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${Recipes}
                </ul>

                <h3>Tags :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    <li class="alert alert-danger m-2 p-1">${dataArray[index].strTags}</li>
                </ul>

                <a target="_blank" href="${dataArray[index].strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${dataArray[index].strYoutube}" class="btn btn-danger">Youtube</a>
            </div>
            
    `;
    hideLoader()
    })
    
    
}

