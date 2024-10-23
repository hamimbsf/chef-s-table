function Navbar() {
  return (
    <div className="navbar flex justify-between items-center px-0 my-4 container mx-auto bg-base-100">
      <div className="">
        <a className="text-xl font-bold cursor-pointer">Recipe Calories</a>
      </div>
      <div className="space-x-4">
        <a className="text-sm px-2 rounded-md btn-ghost" href="#">Home</a>
        <a className="text-sm px-2 rounded-md btn-ghost" href="#">Recipe</a>
        <a className="text-sm px-2 rounded-md btn-ghost" href="#">About</a>
        <a className="text-sm px-2 rounded-md btn-ghost" href="#">Search</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered rounded-full w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
