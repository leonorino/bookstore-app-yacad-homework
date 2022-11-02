export const Genre = ({ genre, isSelected }) => {
  if (isSelected) {
    return <b>{genre}</b>;
  } else {
    return <>{genre}</>
  }
}
