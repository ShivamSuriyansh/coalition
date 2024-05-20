

const Chat = ({chat,onClick,isClicked}) => {

    const ifSelected = `  ${isClicked.chat === chat.date_of_birth && isClicked.clicked ? 'bg-[#D8FCF7]' : 'bg-slate-50'}`
    // console.log(chat);

  return (
    <div className={`chat flex justify-between  ${ifSelected} text-sm pt-2 pb-2 border-t items-center w-[18rem]`} onClick={()=>onClick(chat)}>
        <div className=' flex justify-start items-center gap-2 '>
            <div className=' propic rounded-full h-10 w-10 '>
                <img src={chat.profile_picture} alt="profile pic" />
            </div>
            <div className=' name-and-gender flex flex-col gap-2'>
                <span className=' name'>{chat.name}</span>
                <div className=" flex gap-2">
                    <span className=' gender'>{chat.gender},</span>
                    <span className="age">{chat.age}</span>
                </div>
            </div>
        </div>
        <div className='more'>...</div>
    </div>
  )
}

export default Chat