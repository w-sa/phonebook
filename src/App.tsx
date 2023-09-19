import { useEffect, useState } from "react";
import entryService from "./services/entries";
import * as Interfaces from "./interfaces";
import EntryForm from "./components/EntryForm";
import Entries from "./components/Entries";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState<Interfaces.PersonWithId[]>([]);
  const [renderedContent, setRenderedContent] = useState(persons);
  const [notificationMessage, setNotificationMessage] = useState("Sample Text");
  const [isErrorNotification, setIsErrorNotification] = useState(false);
  const [displayNotification, setDisplayNotification] = useState(false);

  useEffect(() => {
    entryService.getAllEntries().then((response) => {
      setPersons(response.data);
    });
  }, []);

  useEffect(() => {
    setRenderedContent(persons);
  }, [persons]);

  const renderNotification = (messageText: string, isError: boolean) => {
    setNotificationMessage(messageText);
    setIsErrorNotification(isError);

    setDisplayNotification(true);
    setTimeout(() => {
      setDisplayNotification(false);
    }, 3000);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        message={notificationMessage}
        isError={isErrorNotification}
        isDisplayed={displayNotification}
      />
      <Filter entries={persons} onFilterChange={setRenderedContent} />
      <h2>Add a new entry:</h2>
      <EntryForm
        setEntries={setPersons}
        entries={persons}
        createNotification={renderNotification}
      />
      <h2>Numbers</h2>
      <Entries
        entries={renderedContent}
        persons={persons}
        setPersons={setPersons}
        createNotification={renderNotification}
      />
    </div>
  );
};

export default App;
