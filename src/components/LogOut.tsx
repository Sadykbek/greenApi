export default function LogOut({ onSave, regData }: any) {
   function handleLogout() {
      localStorage.removeItem('regData');
      onSave({idInstance: 0, apiTokenInstance: ""});
   }
   return(
      <div>
         <button onClick={handleLogout}>{regData.idInstance ? "Logout" : "Login"}</button>
      </div>
   )
}