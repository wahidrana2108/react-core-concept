import logo from './logo.svg';
import './App.css';

function App() {
  // const animals = ['dog', 'cat', 'tiktiki'];

  const Products = [
    {name: 'Photoshop', price: '$200'},
    {name: "elastratoe", price: "$100"},
    {name: "aftereffect", price: "$150"}
  ]

  
  return (
    <div className="App">
      <header className="App-header">
        {/* <Animal name={animals[2]} details="nothing provided"></Animal>
        <Animal name="cat" details="cats are cute" price="free"></Animal>
        <Animal></Animal>
        <p> Starting the journey of React </p> */


       
        
        <><Product Product={Products[0]}></Product>
          <Product Product={Products[1]}></Product>
          <Product Product={Products[2]}></Product>
          </>
        }
      </header>
    </div>
  );
}

function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: "250px",
    width: "200px",
    float: 'left',
    color: 'black',
    margin: '5px'
  }

  const {name, price} = props.Product;

  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2> {price} </h2>
      <button>buy now</button>
    </div>
  )
}


// function Animal(props){
  
//   const animalStyle = {
//     border: '2px solid white',
//     color: 'white',
//     margin: '10px'
//   }

//   console.log(props);
//   return(

    

//     <div style={animalStyle}>
//       <h3>name: {props.name }</h3>
//       <p>details: {props.details}</p>
//     </div>
//   )
// }

export default App;
