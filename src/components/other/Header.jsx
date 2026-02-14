

const Header = (props) => {

const logOutUser=()=>{
  localStorage.setItem('loggedInUser','')
  // window.location.reload()
  props.changeUser('');
}

  return (
    <div className="w-full px-8 py-5 bg-[#0F141B] border-b border-white/10 flex items-center justify-between">
      
      <h1 className="text-lg text-white/70">
        Hello,
        <br />
        <span className="text-3xl font-semibold text-white">
         username <span className="inline-block">👋</span>
        </span>
      </h1>

      <button onClick={logOutUser}
        className="bg-gradient-to-r from-indigo-500 to-violet-600
        hover:from-indigo-400 hover:to-violet-500
        text-white font-medium px-5 py-2 rounded-lg
        transition-all duration-300
        shadow-md hover:shadow-violet-500/30"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
