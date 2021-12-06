function ListItem({ carArray }) {
  return (
    <li>
      <span>
        {car.carname} : {car.color}
      </span>
      <button
        type="button"
        onClick={function () {
          return removeText(car.id);
        }}
      >
        삭제
      </button>
    </li>
  );
}

function HookArray({ carArray, removeText }) {
  return (
    <ul>
      {carArray.map(function (car) {
        return <ListItem car={car} key={car.id} removeText={removeText} />;
      })}
    </ul>
  );
}

export default HookArray;
