import React from 'react';
import { preProcessFile } from 'typescript';

interface IProps {
    people: {
      name: string,
      age: number,
      url: string,
      note?: string
    }[]
  
  }

const List: React.FC<IProps> = ({people}) => {

    const renderList = (): JSX.Element[] => {
        return people.map(person =>{
            return(
        <li className="List">
            <div className="List-header">
                <img src={person.url} alt=""/>
                <h2>{person.name}</h2>
                <p>{person.age} years old</p>
                <p>{person.note} years old</p>
            </div>
        </li>
        )
        })
    }
     return(
         <div>
             <ul>
               {renderList()}
             </ul>
         </div>
     )
}

export default List;