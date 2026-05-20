function showSection(sectionId){

    let sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        section.classList.add('hidden');
    });

    document.getElementById(sectionId).classList.remove('hidden');
}

function toggleMenu(){

    document.getElementById('sidebar').classList.toggle('active');
}

let totalExpense = 2350;

function addExpense(){

    let name = document.getElementById('expenseName').value;
    let amount = parseInt(document.getElementById('expenseAmount').value);
    let category = document.getElementById('expenseCategory').value;

    if(name === "" || isNaN(amount)){
        alert("Please enter all details");
        return;
    }

    let table = document.getElementById('expenseTable');

    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = category;
    row.insertCell(2).innerHTML = "₹" + amount;

    totalExpense += amount;

    document.getElementById('totalExpenseCard').innerHTML = "₹ " + totalExpense;

    document.getElementById('remainingBalance').innerHTML = "₹ " + (5000 - totalExpense);

    document.getElementById('expenseName').value = "";
    document.getElementById('expenseAmount').value = "";
}

document.getElementById("currentDate").innerHTML =
new Date().toDateString();

const ctx = document.getElementById('expenseChart');

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Food', 'Travel', 'Shopping', 'Bills'],
        datasets: [{
            label: 'Expenses',
            data: [1200, 450, 500, 200],
            borderWidth: 1
        }]
    }
});

const bar = document.getElementById('barChart');

new Chart(bar, {
    type: 'bar',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Monthly Expenses',
            data: [500, 800, 650, 400],
            borderWidth: 1
        }]
    }
});
