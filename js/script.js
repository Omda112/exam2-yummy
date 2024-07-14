function showLoader() {
    document.getElementById("loader").style.display = "block";
}

function hideLoader() {
    document.getElementById("loader").style.display = "none";
}

let li = document.querySelectorAll("li")

$(".open-close-icon").on("click",function(e){
    console.log("btee5")
    if($(".side-nav-menu").css("left")=="0px"){
        $(".side-nav-menu").animate({left:`-${$(".nav-tab").innerWidth()}px`},1000)
    }else{
        $(".side-nav-menu").animate({left:`0px`},1000)
    }
})


$(".search").on("click",function () {
    document.querySelector("#rowData").innerHTML = ""
    showLoader()
    console.log("hello")
    $("#index,#categories,#ingredients,#Area,#contact").fadeOut(500,function(){
        $("#search").fadeIn(500,function(){
            hideLoader()
        })
        
    })
})


$(".categories").on("click",function(){
    document.querySelector("#rowData").innerHTML = ""
    showLoader()
    console.log("hello")
    $("#index,#search,#ingredients,#Area,#contact").fadeOut(500,function(){
        $("#categories").fadeIn(500,function(){
            hideLoader()
        })
    })
})

$(".Area").on("click",function(){
    document.querySelector("#rowData").innerHTML = ""
    showLoader()
    console.log("hello")
    $("#index,#search,#ingredients,#categories,#contact").fadeOut(500,function(){
        showLoader()
        $("#Area").fadeIn(500,function(){
            hideLoader()
        })
    })
})

function showIngredients(){
    document.querySelector("#rowData").innerHTML = ""
    showLoader()
    console.log("hello")
    $("#index,#search,#Area,#categories,#contact").fadeOut(500,function(){
        $("#ingredients").fadeIn(1000,function(){
            hideLoader()
        })
    })
}

function showContacts(){
    document.querySelector("#rowData").innerHTML = ""
    showLoader()
    console.log("hello")
    $("#index,#search,#Area,#categories,#ingredients").fadeOut(500,function(){
        $("#contact").fadeIn(500,function(){
            hideLoader()
        })
    })
}

async function getHome() {
    showLoader()
console.log("btee5");
try {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    let finalresponse = await response.json();
    console.log(finalresponse);
    displayHome(finalresponse);
} catch (error) {
    console.error(error);
}
hideLoader()
}

function displayHome(finalresponse) {
    let dataArray = finalresponse.meals;
    console.log(dataArray)

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
    }
    document.querySelector("#rowData").innerHTML = cartona;
}

getHome()