
export default function Character({ character }) {

  const { avatar, name, power, lightsaber, side,} = character;

  return (
      <>
        <div className="img-container">
            <img src={`https://www.animatedimages.org/data/media/460/animated-star-wars-avatar-image-${avatar}.gif`} alt={`Character name is ${name}`} />
          </div>
          <p>{name}</p>
          <p>{power}</p>
          <p>{lightsaber}</p>
          <p>{side}</p>
      </>
  )
}
