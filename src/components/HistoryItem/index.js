import './index.css'

const HistoryItem = props => {
  const {historyItemList, key, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItemList
  const onClickDelete = () => onDeleteItem(id)

  return (
    <li className="history-item-container">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="history-img-container">
        <img src={logoUrl} alt="domain logo" className="logo-img" />
        <p className="logo-title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button type="button" onClick={onClickDelete} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}
export default HistoryItem
