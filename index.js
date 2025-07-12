// Created by Drishti Yadav (2025)
// Based on a YouTube tutorial by Prashant Sir
// Added: time input, dd-mm-yyyy date format, localStorage support

let todo_list = JSON.parse(localStorage.getItem('todo_list')) || [
  { item: 'Buy Pen', due_date: '14-07-2025', due_time: '10:00' },
  { item: 'Go to College', due_date: '15-07-2025', due_time: '14:00' }
];

display_items();

function add_todo() {
  let input_element = document.querySelector('#todo_input');
  let date_element = document.querySelector('#todo_date');
  let time_element = document.querySelector('#todo_time');

  let todo_item =   input_element.value;
  let todo_date = date_element.value;
  let todo_time = time_element.value;

  /* if (!todo_item || !todo_date || !todo_time) {
    alert("Please fill in all fields.");
    return;
  } */

  todo_list.push({item: todo_item, due_date: todo_date, due_time: todo_time});
  localStorage.setItem('todo_list', JSON.stringify(todo_list));

  input_element.value = '';
  date_element.value = '';
  time_element.value = '';
 
  display_items();
}

function formatDate(input_date) {
  const [year, month, day] = input_date.split("-");
  return `${day}-${month}-${year}`;
}

function display_items() {
  let container_element = document.querySelector('.todo_container');

  let new_html = '';
 
  for (let i = 0; i < todo_list.length; i++) {
    let item = todo_list[i].item;
    let due_date = formatDate(todo_list[i].due_date);
    let due_time = todo_list[i].due_time || '';

    new_html += `
      <span>${item}</span>  
      <span>${due_date}</span>  
      <span>${due_time}</span>
      <button class="btn_delete" onclick="todo_list.splice(${i}, 1); localStorage.setItem('todo_list', JSON.stringify(todo_list)); display_items(); ">Delete</button>
    `;
  }
  container_element.innerHTML = new_html;
}

