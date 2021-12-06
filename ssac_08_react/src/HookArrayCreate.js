function HookArrayCreate({ carname, color, changeText, addText }) {
  return (
    <div>
      <input
        type="text"
        placeholder="차 이름을 입력해주세요."
        onChange={changeText}
        name="carname"
        value={carname}
      />
      <input
        type="text"
        placeholder="차 색을 입력해주세요."
        onChange={changeText}
        name="color"
        value={color}
      />
      <button type="button" onClick={addText}>
        추가
      </button>
    </div>
  );
}

export default HookArrayCreate;
