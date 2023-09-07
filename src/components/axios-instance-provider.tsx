// import axios from "axios";
// import { ReactElement, createContext, useEffect, useRef } from "react";

// export const AxiosContext = createContext(null);

// interface AxiosInstanceProviderProps {
//     config?:any,
//     requestInterceptors?: any,
//     responseInterceptors?: any,
//     children: ReactElement
// }

// const AxiosInstanceProvider = ({
//   config = {},
//   requestInterceptors = [],
//   responseInterceptors = [],
//   children
// }: AxiosInstanceProviderProps) => {
//   const instanceRef = useRef(axios.create(config));
//   useEffect(() => {
//     requestInterceptors.forEach((interceptor: any) => {
//       instanceRef.current.interceptors.request.use(
//         interceptor
//       );
//     });
//     responseInterceptors.forEach((interceptor: any) => {
//       instanceRef.current.interceptors.response.use(
//         interceptor
//       );
//     });
//   }, []);

//   return (
//     <AxiosContext.Provider value={instanceRef.current as any}>
//       {children}
//     </AxiosContext.Provider>
//   );
// };

// export default  AxiosInstanceProvider;