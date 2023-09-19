import { useEffect, useState } from "react";
import entryService from "./services/entries";
import * as Interfaces from "./interfaces";
import EntryForm from "./components/EntryForm";
import Entries from "./components/Entries";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState<Interfaces.PersonWithId[]>([]);
  const [renderedContent, setRenderedContent] = useState(persons);

  useEffect(() => {
    entryService.getAllEntries().then((response) => {
      setPersons(response.data);
    });
  }, []);

  useEffect(() => {
    setRenderedContent(persons);
  }, [persons]);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter entries={persons} onFilterChange={setRenderedContent} />
      <h2>Add a new entry:</h2>
      <EntryForm setEntries={setPersons} entries={persons} />
      <h2>Numbers</h2>
      <Entries entries={renderedContent} persons={persons} setPersons={setPersons} />
    </div>
  );
};

export default App;
