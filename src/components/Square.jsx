export const Square = ({children , updateBoard, index, isSelected}) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`  
    
    const handleClick = () => {
      updateBoard(index)
    }
      
      return (
        <div onClick={handleClick} className={className}>
          <span className="cell-content">
            {children}
          </span>
        </div>
      )
    }
    