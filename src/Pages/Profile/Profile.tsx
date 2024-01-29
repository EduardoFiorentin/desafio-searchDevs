import { useParams, useNavigate } from "react-router-dom"
import mock from "./mock"
import { useEffect, useState } from "react"

import { Building2, MapPin, Mail, Link2, Twitter, UsersRound, Heart, Star, Dot } from "lucide-react"
import { RecoilState, useRecoilState, useRecoilValue } from "recoil"
import user from "../../atoms/user"
import axios from "axios"

import { Repository, Owner, GitHubUser } from "../../types/types"
import repositories from "../../atoms/repositories"

function Profile() {
  const {name} = useParams()

  // const [userSearch, setUserSearch] = useRecoilState<GitHubUser[]>(user)
  const userSearch: GitHubUser = useRecoilValue(user)
  const [reps, setReps] = useState<Repository[]>([])
  const [stars, setStars] = useState(0)

  const calcStars = () => {
    var stars = 0
    for(var i = 0 ; i < reps.length ; i++) {
      stars += reps[i]?.stargazers_count
    }
    setStars(stars)
  }

  const getRepositories = () => {
    axios.get(`https://api.github.com/users/${name}/repos`)
    .then(data => {
      console.log(data.data)
      setReps(data.data)
    })
    .catch(err => console.log(err))
  }

  const calcDaysAgo = (dateString: string): number => {
    const today = new Date();
    const lastUpdate = new Date(dateString);
    const diferenceInMilisseconds = today.getTime() - lastUpdate.getTime();
    const differenceInDays = diferenceInMilisseconds / (1000 * 3600 * 24);
    return Math.round(differenceInDays);
}

  useEffect(() => {
    getRepositories()
    calcStars()
  }, [])

  useEffect(() => console.log("user carregado"), [userSearch])

    return (
      <div className="profile">
        {
          userSearch && ( 
          <div className="profile-info">

          <img src={userSearch?.avatar_url ? userSearch?.avatar_url : ''} alt="" className="profile-img" />

          <div className="profile-names">
            <h2 className="profile-name">{userSearch?.name}</h2>
            <p className="profile-username">{userSearch?.login ? `@${userSearch?.login}` : ''}</p>
          </div>

          <div className="profile-informations">
            <p className="profile-bio">{userSearch?.bio ? userSearch?.bio : "Sem bio"}</p>
            <div className="profile-status">
              <div className="status-followers status-info">
                <UsersRound size={16} className="status-info-icon"/> {userSearch?.followers} <p className="status-info-text">Seguidores</p>
              </div>
              <div className="status-following status-info">
                <Heart size={16} className="status-info-icon"/> {userSearch?.following} <p className="status-info-text">Seguindo</p>
              </div>
              <div className="status-start status-info">
                <Star size={16} className="status-info-icon"/> {stars} <p className="status-info-text">Estrelas</p>
              </div>
            </div>
          </div>

          <div className="profile-links">
            <div className="profile-link">
              <Building2 size={16}/>
              <p className="profile-link-text">{userSearch?.company ? userSearch?.company : "Sem empresa"}</p>
            </div>
            <div className="profile-link">
              <MapPin size={16}/>
              <p className="profile-link-text">{userSearch?.location ? userSearch?.location : "Sem localização"}</p>
            </div>
            <div className="profile-link">
              <Mail size={16}/>
              <p className="profile-link-text">{userSearch?.email ? userSearch?.email : "Sem email"}</p>
            </div>
            <div className="profile-link">
              <Link2 size={16}/>
              <p className="profile-link-text">{userSearch?.site_admin ? userSearch?.site_admin : "Sem site"}</p>
            </div>
            <div className="profile-link">
              <Twitter size={16}/>
              <p className="profile-link-text">{userSearch?.twitter_username ? userSearch?.twitter_username : "Sem twitter"}</p>
            </div>
          </div>

          <div className="profile-button"></div>
        </div>)
        }


        <div className="profile-repositories">
          {
             reps.length !== 0 ? reps?.map(repository => {
              return (
                <div className="profile-repository">
                   <p className="repository-name">{repository.name}</p>
                   <p className="repository-description">{repository.description ? repository.description : "Sem descrissão..."}</p>
                   <div className="repository-info">
                    <p className="repository-stars"><Star size={16}/> {repository.stargazers_count} Estrelas</p>
                    <Dot size={16}/>
                    <p className="repository-last-update">ultimo update {calcDaysAgo(repository.updated_at)} dias atrás</p>
                   </div>
                </div>
              ) 
            })
            : "Carregando"
          }
        </div>
      </div>
    )
  }
  
  export default Profile
  