import * as Interfaces from "../interfaces";
import Entry from "./Entry";
import entryService from "../services/entries";
interface Props {
  entries: Interfaces.PersonWithId[];
  persons: Interfaces.PersonWithId[];
  setPersons: (persons: Interfaces.PersonWithId[]) => void;
}

const Entries = ({ entries, persons, setPersons }: Props) => {
  
  const deleteEntry = (entryId: string, name: string) => {
    if (window.confirm(`Delete ${name}?`)) {
      entryService
        .deleteEntry(entryId)
        .then(() => {
          const updatedPersons = persons.filter(
            (person) => person.id !== entryId
          );
          setPersons(updatedPersons);
        })
        .catch((error) => {
          console.error("... something went wrong", error);
        });
    }
  };

  return (
    <div>
      <ul>
        {entries.map((entry) => (
          <Entry key={entry.id} entry={entry} onDelete={deleteEntry} />
        ))}
      </ul>
    </div>
  );
};

export default Entries;
