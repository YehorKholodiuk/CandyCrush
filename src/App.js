import {useEffect, useState} from "react";

const width = 8
const candyColors = [
    'blue',
    'green',
    'orange',
    'purple',
    'yellow',
    'red'
]



const App = () => {
    const [currentColorArrangement,setCurrentColorArrangement] = useState([])

  const createBoard = () =>{
    const randomColorArrangement = [];
for (let i = 0; i < width*width;i++) {
    const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
  randomColorArrangement.push(randomColor)
}
 setCurrentColorArrangement(randomColorArrangement)
    }


createBoard(() => {
    createBoard()
},[])
    console.log(currentColorArrangement)

    return (
        <div>

        </div>
    )

};

export default App;
