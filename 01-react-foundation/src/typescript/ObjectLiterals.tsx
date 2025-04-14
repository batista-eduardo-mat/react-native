import React from 'react'

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    addres: Addres;
    isAlive?: boolean
}

interface Addres {
    country: string;
    houseNO: number;
}

export const ObjectLiterals = () => {

    const person: Person = {
      firstName: 'Eduardo',
      lastName: 'Batista',
      age: 30,
      isAlive: true,
      addres: {
        country: 'México',
        houseNO: 22
      }
    }

  return (
    <>
    <h3>Objetos literales</h3>
    <pre>
    { JSON.stringify(person, null, 2)}
    </pre>
    </>
    
  )
}
