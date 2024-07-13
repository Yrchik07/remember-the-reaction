const Icon = ({ name }) => (
    <svg className="icon">
      <use xlinkHref={`sprite.svg#${name}`} />
    </svg>
  );
  
  export default Icon;
  