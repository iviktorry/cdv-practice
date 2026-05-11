// import { useState } from "react";

import { useState } from "react";

// function Converter({rateEurToPln})
// {

//   // const rateEurToPln = rateEurToPln;
//   const [plnValue, setPlnValue] = useState(0);
//   const [eurValue, setEurValue] = useState(0);

//   function convertPln(value){
//     setPlnValue(value);
//     setEurValue((value/rateEurToPln).toFixed(2));
//   }

//   function convertEur(value){
//     setEurValue(value);
//     setPlnValue((value*rateEurToPln).toFixed(2));
//   }

//   return <form >
//     <h2>converter</h2>
//     <label htmlFor="pln">PLN&nbsp;</label>
//     <input type="number" id="pln"
//     value={plnValue}
//     style={{width: "80px"}}
//     className="bg-green-200 border border-default-medium"
//     onInput={(event) => convertPln(event.target.value)}/> <br /> <br />
//     <label htmlFor="eur">EUR&nbsp;</label>
//     <input type="number" id="eur"
//     value={eurValue}
//     style={{width: "80px"}}
//     className="bg-blue-200 border border-default-medium"
//     onInput={(event) => convertEur(event.target.value)}/>
//   </form>
// }

// function App(){
//   return <>
//     <Converter rateEurToPln={4.24} />
//   </>
// }

// export default Converter;

function AnOption({ text }) {
  return (
    <ul className="max-w-md space-y-1 text-body list-inside">
      <li className="flex items-center">
        <svg
          className="w-4 h-4 text-fg-success me-1.5 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        {text}
      </li>
    </ul>
  );
}
function Selection({ text, selName, selectAction, isMax }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <li className="flex items-center">
      <label htmlFor={selName}></label>
      <input
        type="checkbox"
        value={text}
        disabled={!isChecked && isMax}
        checked={isChecked}
        id={selName}
        onChange={(event) => {
          selectAction(selName, event.target.checked);
          setChecked(!isChecked);
        }}
      />
      {text}
    </li>
  );
}

function SubjectSelectior() {
  let [counter, setCounter] = useState(0);

  function wasSelected(value, selName) {
    counter = value ? counter + 1 : counter - 1;
    setCounter(counter);
  }

  const subjects = [
    { text: "math", selName: "math" },
    { text: "english", selName: "eng" },
    { text: "tech", selName: "tech" },
    { text: "italian", selName: "it" },
  ];

  return (
    <>
      <h3>Select Only TWO subjects</h3>
      <ul>
        {subjects.map((subjectObj) => (
          <Selection
            key={subjectObj.selName}
            {...subjectObj}
            isMax={counter > 1}
            selectAction={wasSelected}
          />
        ))}
        {/* <Selection
          text="math"
          selName="math"
          isMax={counter > 1}
          selectAction={wasSelected}
        />
        <Selection
          text="english"
          selName="eng"
          isMax={counter > 1}
          selectAction={wasSelected}
        />
        <Selection
          text="polish"
          selName="pol"
          isMax={counter > 1}
          selectAction={wasSelected}
        />
        <Selection
          text="italian"
          selName="it"
          isMax={counter > 1}
          selectAction={wasSelected}
        />
        <Selection
          text="mamama"
          selName="mamama"
          isMax={counter > 1}
          selectAction={wasSelected}
        /> */}
      </ul>
    </>
  );
}

function App() {
  return <SubjectSelectior />;
}

export default App;
