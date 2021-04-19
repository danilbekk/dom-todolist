let array = [
  {
    text:'To Do List',
    done: false
  },
  {
    text:'Поиграть в WF',
    done:true
  },
  {
    text:'Купить ноут',
    done:false
  },
  {
    text:'Прочитать книгу',
    done:true
  },
  {
    text:'Купить бананы',
    done:true
  }
]

let div = document.getElementById('list');

let inp = document.getElementById('input__text');

let bttn = document.getElementById('btn__add');

let butt = document.getElementById('delete')

let render = arr => {
  
  div.textContent = "";

  for (let i = 0; i < array.length; i++) {

    let div_1 = document.createElement('div')

    let input = document.createElement('input');

    let btn = document.createElement('button');

    div_1.classList.add('list__item')

    btn.prepend('x');

    input.type = 'checkbox';

    div_1.prepend(input);
    
    div_1.append(array[i].text)
   
    div_1.append(btn)

    div.append(div_1)
    
    if (array[i].done = true) {
      
      

      div_1.classList.add('listt')

      render()
    }

    butt.addEventListener('click', () => {
      removeCheck(i)
    })

      btn.addEventListener('click', () => {
        remove(i)

        render(array)
      });

      input.addEventListener('change', (ev) => {
        ev.target.parentNode.classList.toggle('checkbox')
      })
 
  }
}

render()

bttn.addEventListener('click', () => {

  addToDo(inp.value)

  inp.value = ""

  render(array)
})

let removeCheck = inde => {
  for (let i = 0; i < array.length; i++) {
    
    if(array[i].done === true) {
      remove(i)
    }

  }
}

let remove = index => {
  
  array.splice(index, 1)

  render(array)
};


let addToDo = text => {
  
  array.push({
    text:text,
    done:false
  })

  render(array)
};

let checkToDo = bool => {

  array[bool].done = !array[bool].done;

}

