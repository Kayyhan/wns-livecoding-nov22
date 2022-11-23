import profile from "./../assets/profile.png";
import Skill from "./Skill";

function Wilder({ name, skills }) {
  return (
    <article className="card">
      <img src={profile} alt={`${name} Profile`} />
      <h3>{name[0].toUpperCase() + name.split("").splice(1).join("")}</h3>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills
          .slice()
          .sort((a, b) => b.votes - a.votes)
          .map((skill, index) => (
            <Skill key={index} title={skill.title} votes={skill.votes} />
          ))}
      </ul>
    </article>
  );
}

export default Wilder;
