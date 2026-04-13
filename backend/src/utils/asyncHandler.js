const asyncHandler = (requestHandler)=>{
      return (req,res) => {
             Promise
                  .resolve(requestHandler(req,res))
      }
}


export default asyncHandler;
