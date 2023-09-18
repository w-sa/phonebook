import { useState } from "react";
import * as Interfaces from "../interfaces";

interface Props {
  setEntries: (persons: Interfaces.Person[]) => void;
  entries: Interfaces.Person[];
}

const EntryForm = ({ setEntries, entries }: Props) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const updatePersons = (personName: string, personNumber: string) => {
    if (
      entries.some(
        (person) => person.name.toLowerCase() === personName.toLowerCase()
      )
    ) {
      alert(`An entry for ${personName} already exists.`);
      return;
    }

    const newPerson: Interfaces.Person = {
      name: personName,
      number: personNumber,
    };
    setEntries(entries.concat(newPerson));
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event!.preventDefault();
    updatePersons(newName, newNumber);
    clearFormInputs();
  };

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const numberChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNumber(event.target.value);
  };

  const clearFormInputs = () => {
    setNewName("");
    setNewNumber("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          name: <input onChange={nameChangeHandler} value={newName} />
        </div>
        <div>
          number: <input onChange={numberChangeHandler} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default EntryForm;
