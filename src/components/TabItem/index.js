import './index.css'

const TabItem = props => {
  const {tabDetails, updatedList, isActive} = props
  const {displayText, tabId} = tabDetails
  const onClickEvent = () => {
    updatedList(tabId)
  }
  const className = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${className}`}
        onClick={onClickEvent}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
