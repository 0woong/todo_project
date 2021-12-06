// 하나의 componet 파일에 여러개 component 작성
// map 함수 사용

function ListItem({ value }) {
  return (
    <li>
      {value.name} - {value.color}
    </li>
  );
}

function HookMap() {
  const carArray = [
    {
      id: 1,
      name: 'Fiat',
      color: 'white',
    },
    {
      id: 2,
      name: 'Kia',
      color: 'red',
    },
    {
      id: 3,
      name: 'Hyundai',
      color: 'grey',
    },
  ];

  return (
    <>
      <br />
      <br />
      <br />
      <ul>
        {carArray.map(function (car) {
          return <ListItem value={car} key={car.id} />;
        })}
      </ul>
    </>
  );
}

export default HookMap;
