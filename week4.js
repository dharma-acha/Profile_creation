
 //grid toggler

var flagtoggle = true;
function gridToggler() {
    var grid_parent = document.getElementById("grid_parent_container")
    if (flagtoggle) {
        grid_parent.style.display = "none"
    } else {
        grid_parent.style.display = "block"
    }
    flagtoggle = !flagtoggle
}

//table toggler

var tabletoggle = true;
function tableToggler() {
    var table_parent = document.getElementById("table_parent")
    if (tabletoggle) {
        table_parent.style.display = "none"
    } else {
        table_parent.style.display = "block"
    }
    tabletoggle = !tabletoggle
}

//dynamic data

var employees = [];

function init() {
    getData();

}
function getData() {
    
        var dataList = `[
            {
                "avatar": "./assets/male.png",
                "name": "Manoj",
                "eid": 101,
                "skills": "ReactJS, AngularJS",
                "project": "Cognizant Internal",
                "hcm": "Alex"
            },
            {
                "avatar": "./assets/female.png",
                "name": "Sharani",
                "eid": 102,
                "skills": "ReactJS, AngularJS",
                "project":  "Cognizant Internal",
                "hcm": "Alex"
            },
            {
                "avatar": "./assets/male.png",
                "name": "Karthik",
                "eid": 103,
                "skills": "ReactJS, AngularJS",
                "project":  "Cognizant Internal",
                "hcm": "Alex"
            },
            {
                "avatar": "./assets/female.png",
                "name": "Isha",
                "eid": 104,
                "skills": "ReactJS, AngularJS",
                "project":  "Cognizant Internal",
                "hcm": "Alex"
            },
            {
                "avatar": "./assets/male.png",
                "name": "Rohit",
                "eid": 105,
                "skills": "ReactJS, AngularJS",
                "project":  "Cognizant Internal",
                "hcm": "Alex"
            },
            {
                "avatar": "./assets/female.png",
                "name": "Smriti",
                "eid": 106,
                "skills": "ReactJS, AngularJS",
                "project":  "Cognizant Internal",
                "hcm": "Alex"
            },
            {
                "avatar": "./assets/male.png",
                "name": "Chethan",
                "eid": 107,
                "skills": "ReactJS, AngularJS",
                "project":  "Cognizant Internal",
                "hcm": "Alex"
            },
            {
                "avatar": "./assets/female.png",
                "name": "Jane",
                "eid": 108,
                "skills": "ReactJS, AngularJS",
                "project":  "Cognizant Internal",
                "hcm": "Alex"
            },
            {
                "avatar": "./assets/male.png",
                "name": "Chris Evans",
                "eid": 109,
                "skills": "ReactJS, AngularJS",
                "project":  "Cognizant Internal",
                "hcm": "Alex"
            },
            {
                "avatar": "./assets/female.png",
                "name": "Natasha",
                "eid": 110,
                "skills": "ReactJS, AngularJS",
                "project":  "Cognizant Internal",
                "hcm": "Alex"
            }
        ]`;
        // console.log(dataList);
        employees = JSON.parse(dataList);
        console.log(employees);
        gridInit();
        listInit()
    
}
function gridInit() {
    var grid_container = document.getElementById("grid_container");
    var grid_items = ``;
    for (let employee of employees) {
        grid_items += `
                                    <div class="grid-item" id="grid-item-${employee.eid}">
                                        <span style='font-size:18px; color:white; font-family:calibri; float:right; background-color:red; border-radius:50%;padding:0px 5px; display:block;margin:5px;cursor: pointer;' class="del_icon" onclick="deleteHandler(${employee.eid})">&#10006</span>
                                        <div class="placeHolder">
                                            <img src="${employee.avatar}" alt="logo">
                                        </div>
                                        
                                        <div class="details">
                                            <p>Name: ${employee.name}</p>
                                            <p>ID: ${employee.eid}</p>
                                            <p>Skills: ${employee.skills}</p>
                                            <p>Project: ${employee.project}</p>
                                            <p>HCM: ${employee.hcm}</p>
                                        </div>
                                        <div class="edit">
                                        <a href=" #"  onclick="gridCardEditHandler(${employee.eid})">Edit</a>
                                   
                                        </div>
                                        
                                    </div>
                                `
    }

// grid_container.innerText = "Hi"
grid_container.innerHTML = grid_items;
}
   
//table
function listInit(){ 
    var table_container = document.getElementById("tableblock");
    var tablerows = ``;
    for (let employee of employees) {
        tablerows += `
                            <div class="tablerow" id="tablerow-${employee.eid}">
                                <div class="tablecolm">
                                    <p>${employee.name}</p>
                                </div>
                                <div class="tablecolm">
                                    <p>${employee.eid}</p>
                                </div>
                                <div class="tablecolm">
                                    <p>${employee.skills}</p>
                                </div>
                                <div class="tablecolm">
                                    <p>${employee.project}</p>
                                </div>
                                <div class="tablecolm">
                                    <p>${employee.hcm}</p>
                                </div>
                                <div class="tablecolm">
                                
                                   <span style='font-size:20px; color:white; font-family:calibri; float:right; background-color:red; border-radius:50%;padding:0px 3px; display:block;margin:5px;cursor: pointer;' class="del_icon" onclick="deleteHandler(${employee.eid})">&#10006</span>
                                   <div style="item-align:center;">
                                         <img src="./assets/edit.png" alt="" width="20px" height="20px" style="margin-top:10px;cursor:pointer;" onclick="listCardEditHandler(${employee.eid})" id="list-edit-img">
                                    </div>
                                </div>
                                
                        
                            </div>
                            
                                `
    }
    // grid_container.innerText = "Hi"
     tableblock.innerHTML = tablerows;
      
 
}
 

// delete function

function deleteHandler(id) {
    employees = employees.filter((employee) => { return employee.eid != id });
    gridInit();
    listInit();
}
function saveSkikk(id, new_skill) {

}

// grid card edit handler

function gridCardEditHandler(id) {

    var itemId = 'grid-item-' + id;
    // alert(itemId);
    var cardItem = document.getElementById(itemId);
    console.log(cardItem);
    var editEl = cardItem.getElementsByTagName("a")[0];
    console.log(editEl);
    var label = editEl.innerText;
    if (label == "Edit") {
        editEl.innerText = 'Save';
        var nameEl = cardItem.getElementsByTagName("p")[2];
        console.log(nameEl);
        var employee = employees.find((employee) => {
            // console.log("edi=", eid, " id=", id);
            return employee.eid == id;
        });
        console.log(employee);
        nameEl.innerHTML = `Skills: 
            <input type='text' autofocus value='${employee.skills}'>
        `
        var inputEl = nameEl.getElementsByTagName("input")[0];
        inputEl.focus();
    } else if (label == "Save") {
        editEl.innerText = 'Edit';
        var nameEl = cardItem.getElementsByTagName("p")[2];
        console.log(nameEl);
        var employee = employees.find((employee) => {
            // console.log("edi=", eid, " id=", id);
            return employee.eid == id;
        });
        console.log(employee);
        var inputEl = nameEl.getElementsByTagName("input")[0];
        employee.skills = inputEl.value;
        nameEl.innerHTML = `Skills: ${employee.skills}
        `
    }
    listInit();
}


// grid list edit handler

function listCardEditHandler(id) {

    var itemId = 'tablerow-' + id;
    // alert(itemId);
    var cardItem = document.getElementById(itemId);
    console.log(cardItem);
    var cardItem1 = cardItem.getElementsByTagName("img")[0];
    if(cardItem1.src.includes("edit")){
        cardItem1.src="./assets/save.png";

        var nameEl = cardItem.getElementsByTagName("p")[2];
        console.log(nameEl);
        var employee = employees.find((employee) => {
            // console.log("edi=", eid, " id=", id);
            return employee.eid == id;
        });
        console.log(employee);
        nameEl.innerHTML = `
            <input type='text' autofocus value='${employee.skills}'>
        `
        var inputEl = nameEl.getElementsByTagName("input")[0];
        inputEl.focus();

    } else if (cardItem1.src.includes("save")) {
        cardItem1.src="./assets/edit.png";


        var nameEl = cardItem.getElementsByTagName("p")[2];
        console.log(nameEl);
        var employee = employees.find((employee) => {
            // console.log("edi=", eid, " id=", id);
            return employee.eid == id;
        });
        console.log(employee);
        var inputEl = nameEl.getElementsByTagName("input")[0];
        employee.skills = inputEl.value;
        nameEl.innerHTML = `${employee.skills}
        `
    }
    gridInit();
}
function listEditHandler(){
    // alert("Hi Edit")
    var editEl = document.getElementById("list-edit-img");
    var path = editEl.src;
    if(path.includes("edit")){
        editEl.src = "../assets/img/save.png"
    }else{
        editEl.src = "../assets/img/edit.png"
    }
}






