import "./style.css"
import { useContext } from 'react'
import { MdPostAdd } from 'react-icons/md'
import { TechContext } from '../../contexts/techContext'

const TechSection = () => {

  const { handleModalAdd, techList, handleModalRemove } = useContext(TechContext)

  return (
    <>
      <div className="technologies_box">
        <div>
          <h3>Tecnologias</h3>
          <MdPostAdd className='add' onClick={handleModalAdd} />
        </div>
        <ul>
          {techList.map((tech, i) => (
            <li key={i} onClick={() => handleModalRemove(tech)}>
              <h4>{tech.title}</h4>
              <p>{tech.status}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default TechSection