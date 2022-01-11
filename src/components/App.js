import React, { useState, useEffect} from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [dogPhoto, setDogPhoto] = useState([])


  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => {
        setDogPhoto(data.message)
        setIsLoaded(true)
      });
  }, [])

  if (!isLoaded) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <img src={dogPhoto} alt="A Random Dog"></img>
    </div>
  )
}

export default App;