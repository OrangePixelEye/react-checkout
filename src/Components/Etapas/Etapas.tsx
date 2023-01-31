const Etapas = () => {
    
    //todo: barras de progresso
    return (
        <div>
            <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
                <li className="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5">
                    <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                        1
                    </span>
                    <span>
                        <h3 className="font-medium leading-tight">Login</h3>
                    </span>
                </li>
                <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                    <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                        2
                    </span>
                    <span>
                        <h3 className="font-medium leading-tight">Endereço</h3>
                    </span>
                </li>
                <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                    <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                        3
                    </span>
                    <span>
                        <h3 className="font-medium leading-tight">Frete</h3>
                    </span>
                </li>
                <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                    <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                        4
                    </span>
                    <span>
                        <h3 className="font-medium leading-tight">Pagamento</h3>
                    </span>
                </li>
                <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                    <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                        5
                    </span>
                    <span>
                        <h3 className="font-medium leading-tight">Revisar compra</h3>
                    </span>
                </li>
            </ol>
        </div>
//         <ul className="stepper" data-mdb-stepper="stepper">
//   <li className="stepper-step stepper-active">
//     <div className="stepper-head">
//       <span className="stepper-head-icon"> 1 </span>
//       <span className="stepper-head-text"> step1 </span>
//     </div>
//     <div className="stepper-content">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
//       magna aliqua.
//     </div>
//   </li>
//   <li className="stepper-step">
//     <div className="stepper-head">
//       <span className="stepper-head-icon"> 2 </span>
//       <span className="stepper-head-text"> step2 </span>
//     </div>
//     <div className="stepper-content">
//       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//     </div>
//   </li>
//   <li className="stepper-step">
//     <div className="stepper-head">
//       <span className="stepper-head-icon"> 3 </span>
//       <span className="stepper-head-text"> step3 </span>
//     </div>
//     <div className="stepper-content">
//       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//     </div>
//   </li>
// </ul>


    );
}

export default Etapas