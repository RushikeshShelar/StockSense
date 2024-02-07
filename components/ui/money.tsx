const Money = ({
    amount
}: {
    amount: number
}) => {
    return ( 
        <div className="rounded-md flex bg-black">
            <div className=" w-[70%] flex flex-col text-white text-center py-2 ">
                <h2 className="text-gray-100 text-xs" >Total Investment</h2>
                <span className="text-md">${amount}</span>
            </div>
            <div className="w-1/3 flex justify-center items-center text-green-400 border-l-[0.1px] border-gray-100 text-xs">
                +18.10%
            </div>
        </div>
     );
}
 
export default Money;