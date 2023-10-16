import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
   
    const post = useLoaderData()
    const{id, title, body} = post
    console.log(id)
    return (
        <div>
          <h1>this is post details</h1>
          <h1>id : {id}</h1>
          <h4>title: {title}</h4>
        </div>
    );
};

export default PostDetails;