import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const [name, setName] = useState('Mario')
    const [age, setAge] = useState(25)

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
 
    const handleClick = () => {
        setName('Luigi')
        setAge(30)
    }

    /*const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }*/

    return ( 
        <div className="home">
            {/*<h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Change name</button>*/}

            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All blogs'/>}
            {/*blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="Mario's blogs" handleDelete = {handleDelete}/>*/}
        </div>
     );     
}
 
export default Home;