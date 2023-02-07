export default function Produtos(){
    return(
        <div>
            <div className="block m-4 px-6 pt-6 rounded-lg shadow-lg bg-white">
                <img className="grid place-content-center m-2 rounded-md border max-w-sm" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className="flex w-full flex-col px-4 py-4">
                    <span className="font-semibold">Nike Air Max Pro 8888</span>
                    <span className="float-right text-gray-400">44BR</span>
                    <p className="mt-auto text-lg font-bold">R$ 238,99</p>
                    <div>
                        <input className="form-control block w-20 px-3
                        py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                        rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                        focus:border-blue-600 focus:outline-none"type="number" placeholder="qtd"></input>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}