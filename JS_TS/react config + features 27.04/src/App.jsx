export const element = <p>learning react</p>;

function Greeting(){
  return <p className="text-5xl text-blue-600 flex justify-center font-bold">Greetings!</p>;
}
const cdv = <span>cdv</span>

const App2 = () => {
  return (
  <div>
    <Greeting/>
    <p>as much as we like {cdv}</p>
    <Greeting/>
  </div>
  )
}

function Welcome({user}){
  return <h1>welcome {user}</h1>;
}

function Display(){
  return (<>
    <Welcome user = "john"/>
    <Welcome user = "mary"/>
  </>)
}

// export default App2;
export default Welcome;