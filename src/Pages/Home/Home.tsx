import { Search } from 'lucide-react'
import '../../assets/css/home.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import user from '../../atoms/user'
import { useRecoilState } from 'recoil'


function Home() {

  const [search, setSearch] = useState<string>('')
  const navigate = useNavigate()
  const handleNavigate = () => navigate(`/profile/${search}`)
  const [userSearch, setUserSearch] = useRecoilState(user)
  const [error, setError] = useState(false)

  const handleSearch = () => {
    axios.get(`https://api.github.com/users/${search}`)
    .then(res => {
      console.log(res.data)
      setUserSearch(res.data)
      handleNavigate()
    })
    .catch(err => setError(true))
  }


    return (
      <section className="home">
        <h1 className="home-title">Search Devs</h1>
        <div className="home-search">
          <input type="text" name="" id="" className="home-input" placeholder="Type the username here" value={search} onChange={event => {
            setSearch(event.target.value)
            setError(false)
          }}/>
          <button className="home-button" onClick={handleSearch}>
            <Search size={16}/> 
            <p className="home-button-text">Buscar</p>
          </button>
        </div>
        {error && <p className="home-error">Usuário não encontrado...</p>}
      </section>
    )
  }
  
  export default Home
