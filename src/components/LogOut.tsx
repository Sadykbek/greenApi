export default function LogOut() {
   function handleLogout() {
      localStorage.removeItem('regData');
   }
   return(
      <div>
         <button onClick={handleLogout}>Logout</button>
      </div>
   )
}