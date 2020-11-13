import React, { FunctionComponent, useEffect, useState } from 'react';
import Card from './Card';
import styles from './Body.module.scss';
import { stringify } from 'querystring';

interface IBodyState {
	error : any,
	items : any[],
  isLoaded : boolean,
}

const Body : FunctionComponent<IBodyState> = (bodyState: IBodyState) => {
	const [error, setError] = useState(bodyState.error);
  const [isLoaded, setIsLoaded] = useState(bodyState.isLoaded);
	const [items, setItems] = useState(bodyState.items);
	
	useEffect(() => {
    fetch("https://localhost:5001/api/CourseItems/", 
      {          
        method: 'GET',        
        headers: { 'Content-Type': 'application/json'},   
      })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log('hello');
          if (result !== "") {
            setItems(result);
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

	if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <React.Fragment>
        {items.map(item => (
          <Card {...item} />
        ))}
      </React.Fragment> 
    );
  }
}

export default Body;
