

const FlashCard = ({image,text,bg}) => {
  return (
    <div>
        <div className=' mt-3'>
                <div className={`respiratory-rate h-[12rem] w-[12rem] rounded-xl`} style={{background : bg}}>
                    <div className=' rounded-full p-4 h-[7rem] w-[6rem] flex flex-col gap-2'>
                        <img src={image} alt="" />
                        <div className=' text-xs ' >{text}</div>
                    </div>
                </div>
                <div className='temperature'></div>
                <div className='heart-rate'></div>
            </div>
    </div>
  )
}

export default FlashCard