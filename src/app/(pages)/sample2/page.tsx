console.log(process.env.BASE_PATH)

const page = () => {
    return (
      <div className="font-bold text-xl flex items-center justify-center">
        {process.env.BASE_PATH}
      </div>
    )
  }
  
  export default page