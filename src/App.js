import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  let count4 = 0;
  let selVal = React.createRef();
  let refBlock7 = React.createRef();
  let [output, setOutput] = useState();
  let [stateBlock7, setStateBlock7] = useState();

  function task1() {
	console.log('task2')
  }
  function task2() {
	document.querySelector('.task-2').classList.add('active');
  }
  function task3(e) {
	  console.log(e.target.value)
  }
  function task4() {
	count4++;
	console.log(count4)
  }
  function task5(e) {
	  console.log(e.target.checked)
		document.querySelector('.out-5').innerHTML = +e.target.checked;
  }
  function task6() {
	setOutput(selVal.current.value);
  }
  function task7() {
	let r = randomInt(0, 250),
		 g = randomInt(0, 250),
		 b = randomInt(0, 250);

	//setBlock7
	console.log(refBlock7.current);
	let out = document.querySelector('.block-7');

	function randomInt (min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min; 
	 }

	 refBlock7.current.style.backgroundColor = `rgb(${r},${g},${b})`;

  }
  function task8() {

  }
  function task9() {

  }
  let ar10 = [5, 6, 7];
  function task10() {

  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button onClick={task1} className="task-1">Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div onMouseEnter={task2} className="task-2"></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input onInput={task3} type="text" className="task-3" />
      </section>
      <section>
        <h2>Task 4</h2>
        <button onClick={task4} className="task-4">Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input onChange={task5} type="checkbox" currentValue="55" />
        <div className="out-5"></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select onChange={task6} className="task-6" ref={selVal}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
		  <div className="out-6">{output}</div>
      </section>

      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={refBlock7} ></div>
        <button onClick={task7} className="task-7">Color</button>
      </section>

      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8"></input>
        <div className="out-8"></div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9"></input>
        <div className="out-9"></div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10"></input>
        <button className="task-10">Push</button>
      </section>
    </>
  );
}

export default App;
