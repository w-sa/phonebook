import * as Interfaces from "../interfaces";

interface Props {
  entry: Interfaces.Person;
}

const Entry = ({ entry }: Props) => {
  return (
    <li>
      {entry.name} {entry.number}
    </li>
  );
};

export default Entry;
