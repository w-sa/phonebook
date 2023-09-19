import * as Interfaces from "../interfaces";
import Entry from "./Entry";

interface Props {
  entries: Interfaces.PersonWithId[];
}

const Entries = ({ entries }: Props) => {
  return (
    <div>
      <ul>
        {entries.map((entry) => (
          <Entry key={entry.id} entry={entry} />
        ))}
      </ul>
    </div>
  );
};

export default Entries;
