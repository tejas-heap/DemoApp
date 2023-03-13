import React from 'react'
import './style.css'
const Search = () => {
  return (
    <div>
        <form action="">
        <div className='search' style={{marginRight:"105px"}} >
        <select name="filter" id="filter" style={{width:"auto"}}>
            <option value="name">Name</option>
            <option value="mobile">Mobile No.</option>
            <option value="email">Email</option>
            <option value="address">Address</option>
        </select>
        <input type="text" placeholder='Search'/>
        <button type='submit'><i class="ri-search-line"></i></button>
        </div>
        </form>
    </div>
  )
}
export default Search