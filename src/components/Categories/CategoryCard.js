export const CategoryCard = (props) => {
  const { name, image_url } = props.category;
  return (
    <div className='category-card-container'>
      <div
        className='card-image'
        style={{ backgroundImage: `url(${image_url})` }}
      ></div>
      <h4>{name}</h4>
    </div>
  );
};
