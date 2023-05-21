import React from 'react'

const style ={
    message:`flex item-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    name:`fixed mt-[-4rem] text-gray-600 text-xs`,
    sent:`bg-[#395dff] text-white flex-row reverse text-end float-right rounded-bl-full`,
    recieved
}
const Message = () => {
  return (
    <div>
        <div className={style.message}>
            <p className={style.name}></p>
            <p className={style.recieve}></p>
        </div>
    </div>
  )
}

export default Message