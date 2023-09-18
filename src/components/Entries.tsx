import * as Interfaces from "../interfaces";
import Entry from "./Entry";

interface Props {
  entries: Interfaces.Person[];
}

const Entries = ({ entries }: Props) => {
  return (
    <div>
      <ul>
        {entries.map((entry) => (
          <Entry key={entry.name} entry={entry} />
        ))}
      </ul>
    </div>
  );
};

export default Entries;
