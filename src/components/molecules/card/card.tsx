import img from './card.png'

export const Card = () => {
    return (
        <div className="w-[320px] h-[596px] p-[20px] border-2 gap-[10px] flex flex-col relative">
            <img src={img} alt="card" className=""/>
           <div className="absolute top-[10px] right-[10px] flex flex-col items-end">
               <span className="bg-[#48A69B] py-[5px] px-[16px] text-white mb-[10px] rounded w-[98px]">Новинка</span>
               <span className="bg-[#D73838] py-[5px] px-[16px] text-white rounded w-[122px]">Хит продаж</span>
           </div>
            <p className="text-[#838688]">Сигвеи</p>
            <p className="text-[20px]">Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)</p>
        </div>
    );
};
