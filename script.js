var selectedtr = null;

/*Form*/
const element = document.querySelector("#info-take");
element.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form submission cancelled.");
});

/* Submit button JavaScript*/
const saveBtn = document.getElementById("submit-btn");
saveBtn.addEventListener("click", addStudent);
// main function
function addStudent() {
  const data = readData();
  if(selectedtr == null){
    insertData(data);
  }else{
     update();
     selectedtr = null;
  }
  clear();
}

/*Read Data from input fields*/
function readData() {
  const student = {};
  student["name"] = document.getElementById("studentName").value;
  student["dob"] = document.getElementById("DateOfBirth").value;
  student["roll"] = document.getElementById("RollNo").value;
  student["class"] = document.getElementById("Class").value;
  student["contact"] = document.getElementById("contact").value;
  return student;
}

function insertData(x) {
  // prevent submission of empty fields
  if(x.name == "" || x.dob == "" || x.roll == "" || x.clas||  x.contact ==""){
    // document.getElementById("studentName").style.border = "1px solid red";
    document.getElementsByClassName("form-control").style.border = "2px solid red"
    return l;
  }
  const table = document.getElementById("table-body");
  const row = table.insertRow(table.length);
  var td1 = row.insertCell(0);
  var td2 = row.insertCell(1);
  var td3 = row.insertCell(2);
  var td4 = row.insertCell(3);
  var td5 = row.insertCell(4);
  var td6 = row.insertCell(5);
  td1.innerHTML = x.name;
  td2.innerHTML = x.dob;
  td3.innerHTML = x.roll;
  td4.innerHTML = x.class;
  td5.innerHTML = x.contact;
  td6.innerHTML = `<button class ="edit-btn" onClick='edit(this)'>Edit</button>&nbsp;<button class ="del-btn" onClick='del(this)'>Delete</button>`;
  alert("New Student Added");
}
// clear function that clear data after submission
function clear() {
  document.getElementById("studentName").value = "";
  document.getElementById("DateOfBirth").value = "";
  document.getElementById("RollNo").value = "";
  document.getElementById("Class").value = "";
  document.getElementById("contact").value = "";
}
// edit function that edit data after clicking "edit"
function edit(y) {
  selectedtr = y.parentElement.parentElement;
  console.log(selectedtr);
  document.getElementById("studentName").value = selectedtr.cells[0].innerHTML;
  document.getElementById("DateOfBirth").value = selectedtr.cells[1].innerHTML;
  document.getElementById("RollNo").value = selectedtr.cells[2].innerHTML;
  document.getElementById("Class").value = selectedtr.cells[3].innerHTML;
  document.getElementById("contact").value = selectedtr.cells[4].innerHTML;
}
// update function that update data 
function update(){
  selectedtr.cells[0].innerHTML = document.getElementById("studentName").value;
  selectedtr.cells[1].innerHTML = document.getElementById("DateOfBirth").value;
  selectedtr.cells[2].innerHTML = document.getElementById("RollNo").value;
  selectedtr.cells[3].innerHTML = document.getElementById("Class").value;
  selectedtr.cells[4].innerHTML = document.getElementById("contact").value;
}
// delete function which delete row 
function del(dl){
  var deleteRow = dl.parentElement.parentElement;
  deleteRow.remove();
}















