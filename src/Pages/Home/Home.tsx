import { Search } from 'lucide-react'
import '../../assets/css/home.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import user from '../../atoms/user'
import { useRecoilState } from 'recoil'
import mock from '../Profile/mock'
import configuration from "../../config/config"


function Home() {

  const [search, setSearch] = useState<string>('')
  const navigate = useNavigate()
  const handleNavigate = () => navigate(`/profile/${configuration.mock_data ? "eduardofiorentin" : search}`)
  const [userSearch, setUserSearch] = useRecoilState(user)
  const [errorNotFound, setErrorNotFound] = useState(false)
  const [error, setError] = useState(false)
  const [searching, setSearching] = useState(false)

  const handleMockSearch = () => {
    resetErrors()
    setUserSearch(mock.mockUser)
    handleNavigate()
  }

  const handleSearch = () => {
    resetErrors()
    setSearching(true)
    
    axios.get(`https://api.github.com/users/${search}`)
    .then(res => {
      setUserSearch(res.data)
      handleNavigate()
      setSearching(false)
    })
    .catch(err => {
      console.log(err)

      // usuário não encontrado
      if (err.code == "ERR_BAD_REQUEST" && err.response.status === 404) setErrorNotFound(true)

      // limite de requisições excedido
      else if(err.code == "ERR_BAD_REQUEST" && err.response.status === 403) window.alert("Você excedeu o limite de requisições por hora! Volte mais tarde.")

      // falha na conexão e outros erros menores
      else setError(true)

      setSearching(false)
    })
  }

  const resetErrors = () => {
    errorNotFound && setErrorNotFound(false)
    error && setError(false)
  }


    return (
      <section className="home">
        <h1 className="home-title">Search Devs</h1>
        <div className="home-search">
          <input type="text" name="" id="" className="home-input" placeholder="Type the username here" value={search} onChange={event => {
            setSearch(event.target.value)
            resetErrors()
          }}/>
          <button className="home-button" onClick={configuration.mock_data ? handleMockSearch : handleSearch } disabled={searching}>
            {
              searching ? (
                <p className="home-button-text">Pesquisando</p>
              ) : (
                <>
                  <Search size={16}/> 
                  <p className="home-button-text">Buscar</p>
                </>
              )
            }
          </button>
        </div>
        {errorNotFound && <p className="home-error">Usuário não encontrado...</p>}
        {error && <p className="home-error">Ocorreu um problema... Verifique sua conexão e tente novamente</p>}
      </section>
    )
  }
  
  export default Home

  