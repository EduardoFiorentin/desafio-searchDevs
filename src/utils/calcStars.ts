import { Repository } from "../types/Repository"

export const calcStars = (reps: Repository[]) => {
    var stars = 0
    for(let rep of reps) {
      stars += rep?.stargazers_count
    //   console.log(rep)
    }
    // console.log("Stars: ", stars)
    return stars
  }