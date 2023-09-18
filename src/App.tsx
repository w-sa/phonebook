import { useEffect, useState } from "react";
import * as Interfaces from "./interfaces";
import EntryForm from "./components/EntryForm";
import Entries from "./components/Entries";
import Filter from "./components/Filter";

const DUMMY_DATA = [
  { name: "Arto Hellas", number: "040-123456" },
  { name: "Ada Lovelace", number: "39-44-5323523" },
  { name: "Dan Abramov", number: "12-43-234345" },
  { name: "Mary Poppendieck", number: "39-23-6423122" },
];

const App = () => {
  const [persons, setPersons] = useState<Interfaces.Person[]>(DUMMY_DATA);
  const [renderedContent, setRenderedContent] = useState(persons);

  useEffect(() => {
    setRenderedContent(persons);
  }, [persons]);

  const filterRenderedContent = (content: Interfaces.Person[]) => {
    setRenderedContent(content);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter entries={persons} onFilterChange={filterRenderedContent} />
      <h2>Add a new entry:</h2>
      <EntryForm setEntries={setPersons} entries={persons} />
      <h2>Numbers</h2>
      <Entries entries={renderedContent} />
    </div>
  );
};

export default App;
