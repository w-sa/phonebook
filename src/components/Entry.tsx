import * as Interfaces from "../interfaces";
import entryService from "../services/entries";

interface Props {
  entry: Interfaces.PersonWithId;
  onDelete: (id: string, name: string) => void;
}

const Entry = ({ entry, onDelete }: Props) => {
  const handleDeletion = () => {
    onDelete(entry.id, entry.name);
  };

  return (
    <li>
      {entry.name} {entry.number}{" "}
      <button onClick={handleDeletion}>Delete</button>
    </li>
  );
};

export default Entry;
