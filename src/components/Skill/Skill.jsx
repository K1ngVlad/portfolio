import './style.css';

const Skill = (props) => {
  return (
    <span className="skill noselect">
      <a href={props.url} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    </span>
  );
};

export { Skill };
