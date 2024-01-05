import Card from "../../components/Card";

const Skill = ({ skill }) => {
  return (
    <Card className="light">
      <div className="skill__client">
        <div className="skill__client-avatar">
          <img src={skill.avatar} alt="skill Avatar" />
        </div>
        <div className="skill__client-details">
          <h6>{skill.name}</h6>
        </div>
      </div>
    </Card>
  );
};

export default Skill;
