import './styles.css'

export const ItemList = ({title, description, url}) => {
  return (
    <div className='item-list'>
        <a href={url} rel='noreferrer' target='_blank'><strong>{title}</strong></a>
        <p>{description}</p>
        <hr />
    </div>
  )
}
