// import { Outlet, Navigate, useLocation } from "react-router-dom";
// import { UserResponse } from "@/features/clients/data/UserResponse";
// import { PermissionType } from "@/static/types/permissions";
// import { decryptData } from "@/services/CryptoService";
// import { routes } from "@/static/routes/routes";

// const extractPermissions = (userResponse: UserResponse): PermissionType[] => {
//   const filterPermission: PermissionType[] = [];
//   for (let index = 0; index < userResponse.roles.length; index++) {
//     const permissions = userResponse.roles[index];
//     for (let j = 0; j < permissions.permissions.length; j++) {
//       filterPermission.push(permissions.permissions[j].name);
//     }
//   }
//   return filterPermission;
// };

// const ProtectedRoutes = () => {
//   const location = useLocation();
//   const token = localStorage.getItem("token");
//   const data = localStorage.getItem("data");

//   if (data == null || token == null) {
//     return <Navigate to="/login" />;
//   }

//   const user: UserResponse = decryptData(data!, process.env.VITE_KEY!);
//   const userPermissions: PermissionType[] = extractPermissions(user);

//   const route = routes.find((route) => route.path === location.pathname);

//   if (
//     route != undefined &&
//     route.permissions != undefined &&
//     route.permissions.length > 0
//   ) {
//     if (
//       route.permissions!.some((permission) =>
//         userPermissions!.includes(permission)
//       )
//     ) {
//       return <Outlet />;
//     }
//     return <Navigate to={location.state?.from || "/"} />;
//   }
//   return <Outlet />;
// };

// export default ProtectedRoutes;
