import NotFoundError from "../errors/NotFoundError.js";

const notFound=(req,res)=>{

    throw new NotFoundError("route does not exits");
};
export default notFound;