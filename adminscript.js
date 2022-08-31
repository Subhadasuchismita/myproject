
function getData() {
    // console.log('call')
    let ages;
    let names;
    let email;
    let phonenumber;
    let address;
    let adhaar;
    let date;
    // let indexdata = [];
    var localdata = localStorage.getItem("userinfo");
    var modifieddat = JSON.parse(localdata);
    // var newRow = '';
  //  console.log(modifieddat);
  for (i = 0; i <= modifieddat.length-1; i++)    
  {     
    names = modifieddat[i].name,
    ages  =modifieddat[i].age,
    email = modifieddat[i].email,
    date = modifieddat[i].date,
    address = modifieddat[i].address,
    adhaar =modifieddat[i].adhaar,
    phonenumber =modifieddat[i].phone
  // };
  // modifieddat.forEach((data, index) => {
  //     const name = data[index];
      let newRow = document.createElement("TR");
      let newAge = document.createElement("TD");
      let newEmail = document.createElement("TD");
      let newAdress = document.createElement("TD");
      let newAdhaar = document.createElement("TD");
      let newDate = document.createElement("TD");
      let newPhone = document.createElement("TD");
      let newNames = document.createElement("TD");
      
      let newBtn = document.createElement("button");
  
      newBtn.innerText = "delete";
      newRow.append(newNames);
      newRow.append(newEmail);
      newRow.append(newAge);
      newRow.append(newPhone);
      newRow.append(newAdhaar);
      newRow.append(newAdress);
      newRow.append(newDate);
      newRow.append(newBtn);
      // console.log(names)
      newNames.innerText = names;
      newEmail.innerText = email;
      newAge.innerText = ages;
      newPhone.innerText = phonenumber;
      newAdhaar.innerText = adhaar;
      newAdress.innerText = address;
      newDate.innerText = date;
      // tableBody.append(newRow);
      document.getElementById("tbody").appendChild(newRow); 

      const newDeleteBtn = () => {
        newBtn.onclick = () => {
          newRow.remove();
        };
      };
      
      newDeleteBtn();
    // });
  }
    
  }
  