import * as Interfaces from "../interfaces";

interface Props {
  entries: Interfaces.PersonWithId[];
  onFilterChange: (content: Interfaces.PersonWithId[]) => void;
}

const Filter = ({ entries, onFilterChange }: Props) => {
  const filterContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    let filterString = event.target.value.toLowerCase();
    const filteredContent = entries.filter((entry) =>
      entry.name.toLowerCase().includes(filterString)
    );
    onFilterChange(filteredContent);
  };

  return (
    <div>
      Filter entries: <input onChange={filterContent} />
    </div>
  );
};

export default Filter;
