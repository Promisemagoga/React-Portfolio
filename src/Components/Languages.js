import languagesData from "../Data/languages";

function Languages() {
  return (
    <div className="language">
      {languagesData.map((data) => (
        <div className="column">
          <h3>{data.language}</h3>
        </div>
      ))}
    </div>
  );
}

export default Languages;
