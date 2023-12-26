import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Banner from '../Components/UserDetails/Banner/Banner'
import UserDetails from '../Components/UserDetails/UserDetails'
import UserReview from '../Components/UserReview/UserReview'
function LayoutRouter() {
  return (
    <Router>
        <Routes>
        <Route path='/' element={<UserDetails/>}/>
        <Route path='/banner' element={<Banner/>}/>
        <Route path='/userReview' element={<UserReview/>}/>
        </Routes>
    </Router>
  )
}

export default LayoutRouter