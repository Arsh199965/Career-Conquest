function Sidebar() {
    return (
        <aside className="w-52 bg-gray-100 shadow-xl shadow-gray-300 border h-auto p-6">
          <ul className="space-y-6">
            <li><a href="/dashboard" className="hover:bg-gray-200 p-2 rounded-md cursor-pointer">
              Dashboard
            </a></li>
            <li><a href="/profile" className="hover:bg-gray-200 p-2 rounded-md cursor-pointer">
              Profile
            </a></li>
            <li><a className="hover:bg-gray-200 p-2 rounded-md cursor-pointer">
              Community
            </a></li>
            <li><a className="hover:bg-gray-200 p-2 rounded-md cursor-pointer">
              Courses
            </a></li>
            <li><a href="/assessments" className="hover:bg-gray-200 p-2 rounded-md cursor-pointer">
              Assessments
            </a></li>
            <li><a className="hover:bg-gray-200 p-2 rounded-md cursor-pointer">
              Interviews
            </a></li>
            <li><a className="hover:bg-gray-200 p-2 rounded-md cursor-pointer">
              Settings
            </a></li>
            <li><a href="/" className="hover:bg-gray-200 p-2 rounded-md cursor-pointer text-red-500">
              Log Out
            </a></li>
          </ul>
        </aside>
    )
}
export default Sidebar;