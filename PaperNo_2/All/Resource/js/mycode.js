function CalTotal(){
    let checkboxes = document.querySelectorAll(`input[type=checkbox]:checked`);
    let itemSelected = document.getElementById("item-selected");
    let totalMoney = 0;
    let totalM = document.getElementById("total-amount")
    checkboxes.forEach(function(checkbox){
        let itemName = checkbox.nextSibling.textContent;
         let li = document.createElement('li');
         li.textContent = itemName;
         itemSelected.appendChild(li);
         let priceItem = parseFloat(checkbox.nextSibling.nextSibling.textContent.charAt(0));
         totalMoney += priceItem;
    });
    totalM.textContent = `Total amount: ${totalMoney}`;
    totalM.style.backgroundColor ="orange";
}