// import { createContext, useContext, useEffect, useState } from "react";
// import { PermissionType } from "../static/types/permissions";
// import { routes } from "@/static/routes/routes";
// import { UserResponse } from "@/features/clients/data/UserResponse";
// import { decryptData, encryptData } from "@/services/CryptoService";
// import LoginResponse from "@/features/auth/data/LoginResponse";

// interface AuthContextType {
//   hasPermission: (permissionType: PermissionType) => boolean;
//   hasPermissonPath: (path: string) => boolean;
//   // updatePermissions: (userResponse: UserResponse) => void;
//   updateUserData: (user: LoginResponse) => void;
//   token: string | null;
//   user: UserResponse | null;
//   permissions: PermissionType[] | null;
// }

// const AuthContext = createContext<AuthContextType | null>(null);

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   // const { pathname } = useLocation();
//   const [token, setToken] = useState<string | null>(null);
//   const [permissions, setPermissions] = useState<PermissionType[]>([]);
//   const [user, setUser] = useState<UserResponse | null>(null);

//   const updateUserData = (userResponse: LoginResponse) => {
//     const encryptedUser = encryptData(userResponse.user, process.env.VITE_KEY!);
//     localStorage.setItem("token", userResponse.token);
//     localStorage.setItem("data", encryptedUser);
//     setUser(userResponse.user);
//     setToken(userResponse.token);
//     setPermissions(extractPermissions(userResponse.user));
//   };

//   const getUserData = () => {
//     // checkLocalDataExist();

//     const data = localStorage.getItem("data");
//     const token = localStorage.getItem("token");
//     if (data == null || token == null) {
//       return;
//     }
//     const decryptedUser: UserResponse = decryptData(
//       data!,
//       process.env.VITE_KEY!
//     );
//     setToken(token);
//     setUser(decryptedUser!);
//     setPermissions(extractPermissions(decryptedUser));
//   };

//   const extractPermissions = (userResponse: UserResponse): PermissionType[] => {
//     const filterPermission: PermissionType[] = [];
//     for (let index = 0; index < userResponse.roles.length; index++) {
//       const permissions = userResponse.roles[index];
//       for (let j = 0; j < permissions.permissions.length; j++) {
//         filterPermission.push(permissions.permissions[j].name);
//       }
//     }
//     return filterPermission;
//   };

//   const hasPermission = (permissionType: PermissionType): boolean => {
//     if (permissions) {
//       return permissions.includes(permissionType);
//     }
//     return false;
//   };

//   const hasPermissonPath = (path: String): boolean => {
//     const encrypedUser = localStorage.getItem("data");
//     if (encrypedUser == null) {
//       return false;
//     }

//     const user: UserResponse = decryptData(
//       encrypedUser!,
//       process.env.VITE_KEY!
//     );
//     const permissionss: PermissionType[] = extractPermissions(user);
//     const route = routes.find((route) => route.path === path);
//     if (
//       route != undefined &&
//       route.permissions != undefined &&
//       route.permissions.length > 0
//     ) {
//       return route.permissions!.some((permission) =>
//         permissionss!.includes(permission)
//       );
//     }
//     return true;
//   };

//   useEffect(() => {
//     getUserData();
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         hasPermission,
//         updateUserData,
//         hasPermissonPath,
//         user,
//         token,
//         permissions,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext)!;
