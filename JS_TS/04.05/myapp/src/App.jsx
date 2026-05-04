import { useState } from "react";

function BigButton({text})
{

    return (<button onClick={() => console.log(`clicked: ${text}`)} 
        className="border-solid border-2">{text}</button>)
}

// function ClickCounter()
// {
//     let [count, setCount] = useState(0);
//     // let count = 0;
//     return <>
//         <span onClick={() => {
//             let num = count + 2;
//             setCount(num);
//             console.log(`clicked ${count}`);
//         }}>
//             Clicked: {count}</span>
//     </>
// }

function ClickCounterObj()
{
    let [countObj, setCountObj] = useState({value: 5});
    // let countObj = {value: 5};
    return <>
        <span onClick={() => {
            let cloneOfObj = {...countObj};
            cloneOfObj.value++;
            setCountObj(cloneOfObj);
            console.log(`clicked ${cloneOfObj.value}`);
        }}>
            Clicked: {countObj.value}</span>
    </>
}


function App()
{
    return <>
    <ClickCounterObj/> <br />
    {/* <ClickCounter/> <br /> */}
    <BigButton text="button a"/> <br />
    <BigButton text="button b"/>
    </>
}

export default App;